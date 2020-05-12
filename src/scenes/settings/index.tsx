import React, { memo } from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import LanguageCodes from '@/types/languageCodes';
import IState from '@/types/state';
import messages from '@/data/translations';
import { setShowingSettings, setShowingLevelSelect } from '@/actions/ui';
import {
  setFastMode,
  setLocale,
  clearProgress,
  setDarkMode,
} from '@/actions/user';
import IconButton from '@/components/iconButton';
import Text from '@/components/text';
import Checkbox from '@/components/checkbox';
import CloseIcon from '@/components/icons/close';
import { loadInitialLevel } from '@/actions/game';
import { selectLocale, selectIsFastMode, selectIsDarkMode } from '@/selectors';
import OptionButton from './optionButton';

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

const Header = styled(View)`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-bottom-color: white;
  border-bottom-width: 2px;
`;

const HeaderText = styled(Text)`
  padding: ${(props) => props.theme.spacing.medium};
  font-size: ${(props) => props.theme.sizing.large};
  color: ${(props) => props.theme.colors.fonts.secondary};
`;

const CloseButtonWrapper = styled(View)`
  position: absolute;
  right: ${(props) => props.theme.spacing.medium};
`;

const CloseButton = styled(IconButton)`
  align-self: flex-end;
  margin: 0;
  height: 30px;
  width: 30px;
`;

const OptionsWrapper = styled(View)`
  padding: ${(props) => props.theme.spacing.medium};
`;

const OptionLabel = styled(Text)`
  font-size: ${(props) => props.theme.sizing.medium};
  color: ${(props) => props.theme.colors.fonts.secondary};
  border: 1px solid yellow;
`;

const SettingsScene = () => {
  const showing = useSelector(
    ({ ui: { showingSettings } }: IState) => showingSettings,
  );
  const isFastMode = useSelector(selectIsFastMode);
  const isDarkMode = useSelector(selectIsDarkMode);
  const locale = useSelector(selectLocale);
  const dispatch = useDispatch();

  //  Don't render if not showing the settings menu
  if (!showing) {
    return null;
  }

  return (
    <Wrapper>
      <Header>
        <HeaderText>Settings</HeaderText>

        <CloseButtonWrapper>
          <CloseButton
            onPress={() => {
              dispatch(setShowingSettings(false));
            }}
          >
            <CloseIcon color="white" />
          </CloseButton>
        </CloseButtonWrapper>
      </Header>

      <OptionsWrapper>
        <OptionButton
          onPress={() => {
            dispatch(setFastMode(!isFastMode));
          }}
        >
          <OptionLabel>
            <FormattedMessage id="fastMode" />
          </OptionLabel>

          <Checkbox checked={isFastMode} />
        </OptionButton>

        <OptionButton
          onPress={() => {
            dispatch(setDarkMode(!isDarkMode));
          }}
        >
          <OptionLabel>
            <FormattedMessage id="darkMode" />
          </OptionLabel>

          <Checkbox checked={isDarkMode} />
        </OptionButton>

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

        <OptionButton
          onPress={() => {
            dispatch(clearProgress());
            dispatch(loadInitialLevel());
            dispatch(setShowingLevelSelect(true));
          }}
        >
          <Text>
            <FormattedMessage id="clearProgress" />
          </Text>
        </OptionButton>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default memo(SettingsScene);
