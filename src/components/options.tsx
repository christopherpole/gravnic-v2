import React, { memo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import IconButton from '@/components/iconButton';
import Text from '@/components/text';
import CloseIcon from '@/components/icons/close';
import Header from '@/components/header';

const Wrapper = styled(View)`
  display: flex;
  position: absolute;
  flex: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.colors.secondary};
`;

const HeaderText = styled(Text)`
  font-size: ${(props) => props.theme.sizing.large};
  text-align: center;
  margin-top: ${(props) => props.theme.sizing.xxs};
`;

//  @todo - revise
const BlankSpace = styled(View)`
  aspect-ratio: 1;
  width: ${(props) =>
    parseInt(props.theme.sizing.large.replace('px', ''), 10) +
    parseInt(props.theme.sizing.large, 10) * 2};
  padding: ${(props) => props.theme.sizing.large};
`;

//  @todo - revise
const CloseButton = styled(IconButton)`
  aspect-ratio: 1;
  width: ${(props) =>
    parseInt(props.theme.sizing.large.replace('px', ''), 10) +
    parseInt(props.theme.sizing.large, 10) * 2};
  padding: ${(props) => props.theme.sizing.large};
`;

const OptionsWrapper = styled(View)`
  flex: 1;
`;

interface IProps {
  headerText: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
}

const Options = ({ headerText, onClose, children, ...rest }: IProps) => (
  <Wrapper {...rest}>
    <Header>
      <BlankSpace />

      <HeaderText>{headerText}</HeaderText>

      <CloseButton onPress={onClose}>
        <CloseIcon color="white" />
      </CloseButton>
    </Header>

    <OptionsWrapper>{children}</OptionsWrapper>
  </Wrapper>
);

export default memo(Options);
