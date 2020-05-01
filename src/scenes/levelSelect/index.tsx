import React, { memo } from 'react';
import styled from 'styled-components';
import { TouchableWithoutFeedback, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import IState from '@/types/state';
import { loadLevel } from '@/actions/game';
import { setShowingLevelSelect } from '@/actions/ui';
import LevelPreview from '@/scenes/levelSelect/levelPreview';
import Progress from './progress';

const Wrapper = styled(View)`
  display: flex;
  flex: 1;
  position: absolute;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const LevelsWrapper = styled(View)`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const LevelPreviewWrapper = styled(View)`
  aspect-ratio: 1;
  width: 33.33333333%;
`;

const LevelSelectScene = () => {
  const dispatch = useDispatch();
  const levels = useSelector(({ game }: IState) => game.levels);
  const showing = useSelector(
    ({ ui: { showingLevelSelect } }: IState) => showingLevelSelect,
  );
  const progress = useSelector(({ user }: IState) => user.progress);

  //  Don't render the component if we aren't showing the level selector
  if (!showing) {
    return null;
  }

  return (
    <Wrapper>
      <Progress />

      <ScrollView bounces={false}>
        <LevelsWrapper>
          {levels.map((levelData, i) => {
            const locked = i > 0 && !progress[i] && !progress[i - 1];
            const stars =
              (progress[i] &&
                levelData.stars.filter((num) => progress[i] <= num).length) ||
              0;

            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  if (locked) return;
                  dispatch(loadLevel(i));
                  dispatch(setShowingLevelSelect(false));
                }}
                key={`level-preview-${i}`}
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
        </LevelsWrapper>
      </ScrollView>
    </Wrapper>
  );
};

export default memo(LevelSelectScene);
