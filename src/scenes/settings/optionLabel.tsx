import React, { memo } from 'react';
import styled from 'styled-components';

import Text from '@/components/text';

type IAlignment = 'left' | 'center' | 'right';

const Wrapper = styled(Text)<{ alignment: IAlignment }>`
  text-align: ${(props) => props.alignment};
  flex: 1;
`;

interface IProps {
  alignment?: IAlignment;
  children: React.ReactNode;
}

const OptionLabel = ({ children, alignment = 'left', ...rest }: IProps) => (
  <Wrapper alignment={alignment} {...rest}>
    {children}
  </Wrapper>
);

export default memo(OptionLabel);
