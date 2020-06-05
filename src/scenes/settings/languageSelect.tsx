import React, { memo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import ILanguageCode from '@/types/languageCodes';
import translations from '@/data/translations';
import Options from '@/components/options';
import { setLocale } from '@/actions/user';
import OptionButton from './optionButton';
import OptionLabel from './optionLabel';

const WrapperInner = styled(View)`
  padding: ${(props) => props.theme.spacing.medium};
  flex: 1;
  justify-content: center;
`;

interface IProps {
  onClose: () => void;
}

const LanguageSelect = ({ onClose }: IProps) => {
  const dispatch = useDispatch();

  const selectLanguage = (languageCode: ILanguageCode) => {
    dispatch(setLocale(languageCode));
    onClose();
  };

  return (
    <Options
      onClose={onClose}
      headerText={<FormattedMessage id="selectLanguage" />}
    >
      <WrapperInner>
        {Object.keys(translations).map((key) => (
          <OptionButton
            onPress={() => {
              selectLanguage(key as ILanguageCode);
            }}
          >
            <OptionLabel alignment="center">
              {translations[key as ILanguageCode].fullLanguageName}
            </OptionLabel>
          </OptionButton>
        ))}
      </WrapperInner>
    </Options>
  );
};

export default memo(LanguageSelect);
