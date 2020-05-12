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
  setShowTutorials,
  setPlayMusic,
  setPlaySfx,
} from '@/actions/user';
import IconButton from '@/components/iconButton';
import Text from '@/components/text';
import Checkbox from '@/components/checkbox';
import CloseIcon from '@/components/icons/close';
import { loadInitialLevel } from '@/actions/game';
import {
  selectLocale,
  selectIsFastMode,
  selectIsDarkMode,
  selectShowTutorials,
  selectPlayMusic,
  selectPlaySfx,
} from '@/selectors';
import Header from '@/components/header';
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

const OptionLabel = styled(Text)`
  font-size: ${(props) => props.theme.sizing.medium};
  color: ${(props) => props.theme.colors.fonts.secondary};
`;

const CenteredOptionLabel = styled(OptionLabel)`
  flex: 1;
  text-align: center;
`;

const SettingsScene = () => {
  const showing = useSelector(
    ({ ui: { showingSettings } }: IState) => showingSettings,
  );
  const isFastMode = useSelector(selectIsFastMode);
  const isDarkMode = useSelector(selectIsDarkMode);
  const playMusic = useSelector(selectPlayMusic);
  const playSfx = useSelector(selectPlaySfx);
  const showTutorials = useSelector(selectShowTutorials);
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
            dispatch(setPlayMusic(!playMusic));
          }}
        >
          <OptionLabel>
            <FormattedMessage id="playMusic" />
          </OptionLabel>

          <Checkbox checked={playMusic} />
        </OptionButton>

        <OptionButton
          onPress={() => {
            dispatch(setPlaySfx(!playSfx));
          }}
        >
          <OptionLabel>
            <FormattedMessage id="playSfx" />
          </OptionLabel>

          <Checkbox checked={playSfx} />
        </OptionButton>

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

        <OptionButton
          onPress={() => {
            dispatch(setShowTutorials(!showTutorials));
          }}
        >
          <OptionLabel>
            <FormattedMessage id="showTutorials" />
          </OptionLabel>

          <Checkbox checked={showTutorials} />
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
          <CenteredOptionLabel>
            <FormattedMessage id="clearProgress" />
          </CenteredOptionLabel>
        </OptionButton>
      </OptionsWrapper>
    </Wrapper>
  );
};

export default memo(SettingsScene);
