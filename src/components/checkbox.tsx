import React, { memo } from 'react';
import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';

const Wrapper = styled(TouchableOpacity)<{ checked: boolean }>`
  height: 20px;
  width: 20px;
  background: ${(props) => (props.checked ? 'green' : 'white')};
`;

interface IProps {
  checked: boolean;
}

const Checkbox = (props: IProps) => <Wrapper {...props} />;

export default memo(Checkbox);
