import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { View } from 'react-native';

const Wrapper = styled(View)<IProps>`
  width: 5%;
  aspect-ratio: 1;
  background: #ffd700;
  margin: 0 2.5%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  border: 1px solid ${(props) => props.theme.colors.disabled};
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.achieved &&
    css`
      background: purple;
    `}

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

interface IProps {
  achieved?: boolean;
  used?: boolean;
  large?: boolean;
}

const Star = (props: IProps) => <Wrapper {...props} />;

export default memo(Star);
