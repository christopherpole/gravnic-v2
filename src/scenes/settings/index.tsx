import React, { memo } from 'react';
import { TouchableWithoutFeedback, View, Switch } from 'react-native';
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
import Button from '@/components/button';
import CloseIcon from '@/components/icons/close';
import { loadInitialLevel } from '@/actions/game';
import { selectLocale, selectIsFastMode, selectIsDarkMode } from '@/selectors';

const Wrapper = styled(View)`
  display: flex;
  position: absolute;
  flex: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${(props) => props.theme.spacing.large};
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(View)`
  display: flex;
  position: absolute;
  flex: 1;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const WrapperInner = styled(View)`
  background: white;
  padding: ${(props) => props.theme.spacing.medium};
  width: 100%;
`;

const CloseButtonWrapper = styled(View)`
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

const CloseButton = styled(IconButton)`
  align-self: flex-end;
  margin: 0;
  height: 30px;
  width: 30px;
`;

const OptionsWrapper = styled(View)`
  margin-bottom: -${(props) => props.theme.spacing.medium};
`;

const OptionLabel = styled(Text)`
  font-size: ${(props) => props.theme.sizing.medium};
`;

const OptionWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing.medium};
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
      <TouchableWithoutFeedback
        onPress={() => {
          dispatch(setShowingSettings(false));
        }}
      >
        <Backdrop />
      </TouchableWithoutFeedback>
      <WrapperInner>
        <CloseButtonWrapper>
          <CloseButton
            onPress={() => {
              dispatch(setShowingSettings(false));
            }}
          >
            <CloseIcon />
          </CloseButton>
        </CloseButtonWrapper>

        <OptionsWrapper>
          <OptionWrapper>
            <OptionLabel>
              <FormattedMessage id="fastMode" />
            </OptionLabel>
            <Switch
              value={isFastMode}
              onValueChange={(val: boolean) => {
                dispatch(setFastMode(val));
              }}
            />
          </OptionWrapper>

          <OptionWrapper>
            <OptionLabel>
              <FormattedMessage id="darkMode" />
            </OptionLabel>
            <Switch
              value={isDarkMode}
              onValueChange={(val: boolean) => {
                dispatch(setDarkMode(val));
              }}
            />
          </OptionWrapper>

          <OptionWrapper>
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
          </OptionWrapper>

          <OptionWrapper>
            <Button
              onPress={() => {
                dispatch(clearProgress());
                dispatch(loadInitialLevel());
                dispatch(setShowingLevelSelect(true));
              }}
            >
              <FormattedMessage id="clearProgress" />
            </Button>
          </OptionWrapper>
        </OptionsWrapper>
      </WrapperInner>
    </Wrapper>
  );
};

export default memo(SettingsScene);
