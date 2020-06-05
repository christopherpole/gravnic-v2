import React, { memo } from 'react';
import styled from 'styled-components';
import { View } from 'react-native';

const Wrapper = styled(View)<{ checked: boolean }>`
  height: ${(props) => props.theme.sizing.extraLarge};
  width: ${(props) => props.theme.sizing.extraLarge};
  background: ${(props) =>
    props.checked
      ? props.theme.colors.checkbox.checked
      : props.theme.colors.checkbox.unchecked};
`;

interface IProps {
  checked: boolean;
}

const Checkbox = (props: IProps) => <Wrapper {...props} />;

export default memo(Checkbox);
