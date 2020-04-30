import React, { memo } from 'react';
import styled from 'styled-components';
import { TouchableWithoutFeedback, ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import IState from '@/types/state';
import { loadLevel, setShowingLevelSelect } from '@/actions';
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
  const levels = useSelector((state: IState) => state.game.levels);
  const showing = useSelector((state: IState) => state.ui.showingLevelSelect);
  const progress = useSelector((state: IState) => state.user.progress);

  //  Don't render the component if we aren't showing the level selector
  if (!showing) {
    return null;
  }

  return (
    <Wrapper>
      <Progress />

      <ScrollView bounces={false}>
        <LevelsWrapper>
          {levels.map((levelData, i) => (
            <TouchableWithoutFeedback
              onPress={() => {
                dispatch(loadLevel(levelData.id));
                dispatch(setShowingLevelSelect(false));
              }}
              key={`level-preview-${i}`}
            >
              <LevelPreviewWrapper>
                <LevelPreview
                  {...levelData}
                  progress={
                    (progress[levelData.id] &&
                      levelData.stars.filter(
                        (num) => progress[levelData.id] <= num,
                      ).length) ||
                    0
                  }
                />
              </LevelPreviewWrapper>
            </TouchableWithoutFeedback>
          ))}
        </LevelsWrapper>
      </ScrollView>
    </Wrapper>
  );
};

export default memo(LevelSelectScene);
