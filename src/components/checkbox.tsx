import React, { memo } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const Wrapper = styled(TouchableOpacity)<{ checked: boolean }>`
  height: 30px;
  width: 30px;
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
