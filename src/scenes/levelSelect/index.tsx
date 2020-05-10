import React, { memo, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import {
  TouchableWithoutFeedback,
  FlatList,
  View,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectLevels,
  selectShowingLevelSelect,
  selectListScrollIndex,
  selectProgress,
} from '@/selectors';
import { loadLevel } from '@/actions/game';
import { setShowingLevelSelect } from '@/actions/ui';
import LevelPreview from '@/scenes/levelSelect/levelPreview';
import { disabledColorScheme } from '@/data/colorSchemes';
import Header from './header';

const Wrapper = styled(View)<{ showing: boolean }>`
  display: flex;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  overflow: hidden;

  ${(props) =>
    props.showing &&
    css`
      height: auto;
    `};
`;

const Row = styled(View)`
  display: flex;
  flex-direction: row;
`;

const LevelsWrapper = styled(View)`
  flex: 1;
`;

const levelAspectRatio = 0.76;
const LevelPreviewWrapper = styled(View)`
  aspect-ratio: ${levelAspectRatio};
  width: 33.33333333%;
`;

const LevelSelectScene = () => {
  const dispatch = useDispatch();
  const showing = useSelector(selectShowingLevelSelect);
  const levels = useSelector(selectLevels);
  const progress = useSelector(selectProgress);
  const listScrollIndex = useSelector(selectListScrollIndex);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef && listRef.current) {
      //  @ts-ignore - seems bugged
      listRef.current.scrollToIndex({
        index: listScrollIndex,
      });
    }
  }, [listScrollIndex]);

  return (
    <Wrapper showing={showing}>
      <Header />

      <LevelsWrapper>
        <FlatList
          ref={listRef}
          initialScrollIndex={listScrollIndex}
          bounces={false}
          removeClippedSubviews
          getItemLayout={(data, index) => ({
            length: Dimensions.get('window').width / 3 / levelAspectRatio,
            offset:
              (Dimensions.get('window').width / 3 / levelAspectRatio) * index,
            index,
          })}
          data={[...Array(levels.length / 3)].map((_, i) => [
            levels[i * 3],
            levels[i * 3 + 1],
            levels[i * 3 + 2],
          ])}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Row key={`level-preview-row-${index}`}>
              {item.map((levelData, j) => {
                const levelIndex = index * 3 + j;
                const locked =
                  levelIndex > 0 &&
                  !progress[levelIndex] &&
                  !progress[levelIndex - 1];
                const stars =
                  (progress[levelIndex] &&
                    levelData.stars.filter((num) => progress[levelIndex] <= num)
                      .length) ||
                  0;

                return (
                  <TouchableWithoutFeedback
                    key={`level-preview-${levelIndex}`}
                    onPress={() => {
                      if (locked) return;
                      dispatch(loadLevel(levelIndex));
                      dispatch(setShowingLevelSelect(false));
                    }}
                  >
                    <LevelPreviewWrapper>
                      <LevelPreview
                        {...levelData}
                        progress={stars}
                        locked={locked}
                        colorScheme={
                          locked ? disabledColorScheme : levelData.colorScheme
                        }
                      />
                    </LevelPreviewWrapper>
                  </TouchableWithoutFeedback>
                );
              })}
            </Row>
          )}
        />
      </LevelsWrapper>
    </Wrapper>
  );
};

export default memo(LevelSelectScene);
