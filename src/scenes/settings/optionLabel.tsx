import React, { memo } from 'react';
import styled from 'styled-components';

import Text from '@/components/text';

const Wrapper = styled(Text)<{ centered?: boolean }>`
  font-size: ${(props) => props.theme.sizing.medium};
  color: ${(props) => props.theme.colors.fonts.secondary};
  text-align: ${(props) => (props.centered ? 'center' : 'left')};
  flex: 1;
`;

interface IProps {
  centered?: boolean;
  children: React.ReactNode;
}

const OptionLabel = ({ children, ...rest }: IProps) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default memo(OptionLabel);
