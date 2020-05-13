import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { clearProgress } from '@/actions/user';
import { loadInitialLevel } from '@/actions/game';
import Options from '@/components/options';
import Text from '@/components/text';

import OptionButton from './optionButton';
import OptionLabel from './optionLabel';

const ConfirmationText = styled(Text)`
  font-size: ${(props) => props.theme.sizing.large};
  color: ${(props) => props.theme.colors.fonts.secondary};
  margin-bottom: ${(props) => props.theme.spacing.medium};
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
    </Options>
  );
};

export default memo(ConfirmClear);

// dispatch(clearProgress());
// dispatch(loadInitialLevel());
// dispatch(setShowingLevelSelect(true));
