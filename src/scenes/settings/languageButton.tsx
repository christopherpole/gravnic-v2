import React, { memo } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import LanguageCodes from '@/types/languageCodes';
import messages from '@/data/translations';
import { setLocale } from '@/actions/user';
import { selectLocale } from '@/selectors';
import OptionButton from './optionButton';
import OptionLabel from './optionLabel';

const LanguageButton = () => {
  const locale = useSelector(selectLocale);
  const dispatch = useDispatch();

  return (
    <OptionButton onPress={() => {}}>
      <OptionLabel>
        <FormattedMessage id="language" />
      </OptionLabel>

      <RNPickerSelect
        onValueChange={(val: LanguageCodes) => {
          dispatch(setLocale(val));
        }}
        placeholder={{}}
        value={locale}
        items={Object.keys(messages).map((languageCode) => ({
          label: messages[languageCode as LanguageCodes].fullLanguageName,
          value: languageCode,
        }))}
      />
    </OptionButton>
  );
};

export default memo(LanguageButton);
