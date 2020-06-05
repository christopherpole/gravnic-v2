import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { View } from 'react-native';

import Options from '@/components/options';
import Text from '@/components/text';

const CreditsBlock = styled(View)`
  padding: ${(props) => props.theme.spacing.medium};
`;

const CreditsText = styled(Text)`
  font-size: ${(props) => props.theme.sizing.small};
`;

interface IProps {
  onClose: () => void;
}

const Credits = ({ onClose }: IProps) => {
  return (
    <Options onClose={onClose} headerText={<FormattedMessage id="credits" />}>
      <CreditsBlock>
        <CreditsText>Design and Programming by Christopher Pole</CreditsText>
      </CreditsBlock>
    </Options>
  );
};

export default memo(Credits);
