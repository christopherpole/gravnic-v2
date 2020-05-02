import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

const LevelMessageWrapper = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: ${(props) => props.theme.spacing.medium};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LevelMessageWrapperInner = styled(View)`
  padding: ${(props) => props.theme.spacing.medium};
  border: 2px solid black;
  background: white;
`;

interface IProps {
  children: React.ReactNode;
}

const LevelMessage = ({ children }: IProps) => {
  return (
    <LevelMessageWrapper>
      <LevelMessageWrapperInner>{children}</LevelMessageWrapperInner>
    </LevelMessageWrapper>
  );
};

export default memo(LevelMessage);
