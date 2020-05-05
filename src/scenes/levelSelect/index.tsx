import React, { memo, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import {
  TouchableWithoutFeedback,
  FlatList,
  View,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import IState from '@/types/state';
import { loadLevel } from '@/actions/game';
import { setShowingLevelSelect } from '@/actions/ui';
import LevelPreview from '@/scenes/levelSelect/levelPreview';
import Progress from './progress';

const Wrapper = styled(View)<{ showing: boolean }>`
  display: flex;
  flex: 1;
  position: absolute;
  background: white;
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

const LevelPreviewWrapper = styled(View)`
  aspect-ratio: 0.76;
  width: 33.33333333%;
`;

const LevelSelectScene = () => {
  const dispatch = useDispatch();
  const levels = useSelector(({ game }: IState) => game.levels);
  const showing = useSelector(
    ({ ui: { showingLevelSelect } }: IState) => showingLevelSelect,
  );
  const progress = useSelector(({ user }: IState) => user.progress);
  const latestUnlockedLevelIndex =
    Object.keys(progress).length > 0
      ? parseInt(
          Object.keys(progress).sort(
            (a, b) => parseInt(a, 10) - parseInt(b, 10),
          )[Object.keys(progress).length - 1],
          10,
        )
      : 0;
  let listScrollIndex = Math.floor((latestUnlockedLevelIndex + 1) / 3) - 1;
  listScrollIndex = listScrollIndex < 0 ? 0 : listScrollIndex;
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
      <Progress />

      <LevelsWrapper>
        <FlatList
          ref={listRef}
          initialScrollIndex={listScrollIndex}
          bounces={false}
          getItemLayout={(data, index) => ({
            length: Dimensions.get('window').width / 3,
            offset: (Dimensions.get('window').width / 3) * index,
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
