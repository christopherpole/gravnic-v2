import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { TouchableWithoutFeedback, View } from 'react-native';

interface IProps {
  value: boolean;
  onValueChange: (checked: boolean) => void;
}

const Wrapper = styled(View)<{
  value: boolean;
}>`
  height: 30px;
  width: 30px;
  background: white;

  ${(props) =>
    props.value &&
    css`
      background: blue;
    `}
`;
const Switch = ({ onValueChange, ...rest }: IProps) => (
  <TouchableWithoutFeedback
    onPress={() => {
      onValueChange(!rest.value);
    }}
  >
    <Wrapper {...rest} />
  </TouchableWithoutFeedback>
);

export default memo(Switch);
