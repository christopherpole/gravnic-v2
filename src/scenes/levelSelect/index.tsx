import React from 'react';
import styled from 'styled-components';
import { TouchableWithoutFeedback, ScrollView, View, Text } from 'react-native';

import LevelPreview from '@/scenes/levelSelect/levelPreview';
import levelsData from '@/data/levels';
import colorSchemes from '@/data/colorSchemes';

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
  return (
    <Wrapper>
      <StarsCountWrapper>
        <StarsCountText>0/{levelsData.length * 3}</StarsCountText>
      </StarsCountWrapper>
      <ScrollView bounces={false}>
        <LevelsWrapper>
          {levelsData.map((levelData, i) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Game')}
              key={`level-preview-${i}`}
            >
              <LevelPreviewWrapper>
                <LevelPreview
                  {...levelData}
                  colorScheme={
                    colorSchemes[Math.floor(i % colorSchemes.length)]
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

export default LevelSelectScene;
