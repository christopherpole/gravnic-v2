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
  border: 2px solid black;
  background: #e9ca04;
  box-shadow: ${(props) => props.theme.shadows.default};
  padding: 25px;
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
