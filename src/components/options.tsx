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
  padding: ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.sizing.large};
  color: ${(props) => props.theme.colors.fonts.secondary};
  width: 100%;
  text-align: center;
`;

const CloseButtonWrapper = styled(View)`
  position: absolute;
  z-index: 2;
  right: ${(props) => props.theme.spacing.medium};
`;

const CloseButton = styled(IconButton)`
  align-self: flex-end;
  margin: 0;
  height: 20px;
  width: 20px;
`;

const OptionsWrapper = styled(View)`
  padding: ${(props) => props.theme.spacing.medium};
`;

interface IProps {
  headerText: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
}

const Options = ({ headerText, onClose, children }: IProps) => {
  return (
    <Wrapper>
      <Header>
        <HeaderText>{headerText}</HeaderText>

        <CloseButtonWrapper>
          <CloseButton onPress={onClose}>
            <CloseIcon color="white" />
          </CloseButton>
        </CloseButtonWrapper>
      </Header>

      <OptionsWrapper>{children}</OptionsWrapper>
    </Wrapper>
  );
};

export default memo(Options);
