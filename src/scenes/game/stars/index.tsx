import React from 'react';
import styled, { css } from 'styled-components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { TEST_LEVEL } from '@/config';
import IState from '@/types/state';

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const Star = styled(View)<{ used?: boolean; large?: boolean }>`
  width: 5%;
  aspect-ratio: 1;
  background: yellow;
  margin: 0 2.5%;

  ${(props) =>
    props.used &&
    css`
      background: ${props.theme.colors.disabled};
    `}

  ${(props) =>
    props.large &&
    css`
      width: 8%;
    `}
`;

const Stars = () => {
  const { stars } = TEST_LEVEL;
  const noOfMovesMade = useSelector(
    (state: IState) => state.gameStateHistory.length - (state.undoing ? 2 : 1),
  );

  return (
    <Wrapper>
      {[...Array(stars['3'])].map((i, index) => (
        <Star
          key={`star-${index}`}
          used={index < noOfMovesMade}
          large={Object.values(stars).includes(index + 1)}
        />
      ))}
    </Wrapper>
  );
};

export default Stars;
