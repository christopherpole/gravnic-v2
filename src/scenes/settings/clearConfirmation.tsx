import React, { useState, memo } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { clearProgress } from '@/actions/user';
import { loadInitialLevel } from '@/actions/game';
import Options from '@/components/options';
import Text from '@/components/text';

import OptionButton from './optionButton';
import OptionLabel from './optionLabel';

const WrapperInner = styled(View)`
  padding: ${(props) => props.theme.spacing.medium};
  flex: 1;
  justify-content: center;
`;

const ConfirmationText = styled(Text)`
  margin-bottom: ${(props) => props.theme.spacing.large};
  font-size: ${(props) => props.theme.sizing.large};
  text-align: center;
`;

interface IProps {
  onClose: () => void;
}

const ConfirmClear = ({ onClose }: IProps) => {
  const dispatch = useDispatch();
  const [showingConfirmation, setShowingConfirmation] = useState<boolean>(
    false,
  );

  return (
    <Options
      onClose={onClose}
      headerText={<FormattedMessage id="confirmClearProgress" />}
    >
      <WrapperInner>
        {!showingConfirmation && (
          <>
            <ConfirmationText>
              <FormattedMessage id="areYouSure" />
            </ConfirmationText>
            <OptionButton
              onPress={() => {
                dispatch(clearProgress());
                dispatch(loadInitialLevel());
                setShowingConfirmation(true);
              }}
            >
              <OptionLabel alignment="center">
                <FormattedMessage id="yes" />
              </OptionLabel>
            </OptionButton>
            <OptionButton
              onPress={() => {
                onClose();
              }}
            >
              <OptionLabel alignment="center">
                <FormattedMessage id="no" />
              </OptionLabel>
            </OptionButton>
          </>
        )}

        {showingConfirmation && (
          <>
            <ConfirmationText>
              <FormattedMessage id="progressCleared" />
            </ConfirmationText>

            <OptionButton
              onPress={() => {
                onClose();
              }}
            >
              <OptionLabel alignment="center">
                <FormattedMessage id="okay" />
              </OptionLabel>
            </OptionButton>
          </>
        )}
      </WrapperInner>
    </Options>
  );
};

export default memo(ConfirmClear);
