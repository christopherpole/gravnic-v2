import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

const LevelMessageWrapper = styled(View)`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LevelMessageWrapperInner = styled(View)`
  border: ${(props) => props.theme.sizing.border} solid black;
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.large};
  display: flex;
  align-items: center;
  justify-content: center;
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
