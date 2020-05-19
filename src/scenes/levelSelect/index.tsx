import React, { memo, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import {
  TouchableWithoutFeedback,
  FlatList,
  View,
  Dimensions,
  Animated,
  Easing,
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
import Header from './header';

const Wrapper = styled(Animated.View)<{ showing: boolean }>`
  display: flex;
  flex: 1;
  position: absolute;
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  height: 100%;
  width: 100%;
  /* height: 0; */
  /* overflow: hidden; */
/* 
  ${(props) =>
    props.showing &&
    css`
      height: auto;
    `}; */
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
  const rightAnim = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const showing = useSelector(selectShowingLevelSelect);
  const levels = useSelector(selectLevels);
  const progress = useSelector(selectProgress);
  const listScrollIndex = useSelector(selectListScrollIndex);
  const listRef = useRef(null);

  useEffect(() => {
    Animated.timing(rightAnim, {
      toValue: showing ? 1 : 0,
      duration: 400,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();
  }, [showing, rightAnim]);

  useEffect(() => {
    if (listRef && listRef.current) {
      //  @ts-ignore - seems bugged
      listRef.current.scrollToIndex({
        index: listScrollIndex,
      });
    }
  }, [listScrollIndex]);

  return (
    <Wrapper
      style={{
        transform: [
          {
            translateX: rightAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-Dimensions.get('window').width, 0],
            }),
          },
        ],
      }}
      showing={showing}
    >
      <Header />

      <LevelsWrapper>
        <FlatList
          ref={listRef}
          initialScrollIndex={listScrollIndex}
          bounces={false}
          numColumns={3}
          initialNumToRender={15}
          maxToRenderPerBatch={6}
          removeClippedSubviews
          getItemLayout={(data, index) => ({
            length: Dimensions.get('window').width / 3 / levelAspectRatio,
            offset:
              (Dimensions.get('window').width / 3 / levelAspectRatio) * index,
            index,
          })}
          data={levels}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            const locked =
              index > 0 && !progress[index] && !progress[index - 1];
            const stars =
              (progress[index] &&
                item.stars.filter((num) => progress[index] <= num).length) ||
              0;

            return (
              <TouchableWithoutFeedback
                key={`level-preview-${index}`}
                onPress={() => {
                  if (locked) return;
                  dispatch(loadLevel(index));
                  dispatch(setShowingLevelSelect(false));
                }}
              >
                <LevelPreviewWrapper>
                  <LevelPreview
                    {...item}
                    progress={stars}
                    locked={locked}
                    levelIndex={index}
                  />
                </LevelPreviewWrapper>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </LevelsWrapper>
    </Wrapper>
  );
};

export default memo(LevelSelectScene);
