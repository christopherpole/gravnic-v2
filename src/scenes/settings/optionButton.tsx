import React, { memo } from 'react';
import styled from 'styled-components';

import Button from '@/components/button';

const Wrapper = styled(Button)`
  margin-bottom: ${(props) => props.theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

interface IProps {
  children: React.ReactNode;
  onPress: () => void;
}

const OptionButton = ({ children, ...rest }: IProps) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default memo(OptionButton);
