import React, { memo } from 'react';
import styled from 'styled-components';
import { TouchableWithoutFeedback, ScrollView, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import IState from '@/types/state';
import { loadLevel } from '@/actions';
import LevelPreview from '@/scenes/levelSelect/levelPreview';

const Wrapper = styled(View)`
  display: flex;
  flex: 1;
`;

const StarsCountWrapper = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-color: black;
  border-bottom-width: 2px;
`;

const StarsCountText = styled(Text)`
  padding: ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.sizing.large};
  color: red;
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

interface ILevelSelectScene {
  navigation: {
    navigate: (routeName: string) => void;
  };
}

const LevelSelectScene = ({ navigation }: ILevelSelectScene) => {
  const dispatch = useDispatch();
  const levels = useSelector((state: IState) => state.game.levels);

  return (
    <Wrapper>
      <StarsCountWrapper>
        <StarsCountText>0/{levels.length * 3}</StarsCountText>
      </StarsCountWrapper>
      <ScrollView bounces={false}>
        <LevelsWrapper>
          {levels.map((levelData, i) => (
            <TouchableWithoutFeedback
              onPress={() => {
                dispatch(loadLevel(levelData.id));
                navigation.navigate('Game');
              }}
              key={`level-preview-${i}`}
            >
              <LevelPreviewWrapper>
                <LevelPreview {...levelData} />
              </LevelPreviewWrapper>
            </TouchableWithoutFeedback>
          ))}
        </LevelsWrapper>
      </ScrollView>
    </Wrapper>
  );
};

export default memo(LevelSelectScene);
