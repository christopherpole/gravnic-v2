import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import IState from '@/types/state';
import { setShowingSettings } from '@/actions/ui';
import {
  setFastMode,
  setDarkMode,
  setShowTutorials,
  setPlayMusic,
  setPlaySfx,
} from '@/actions/user';
import Checkbox from '@/components/checkbox';
import {
  selectIsFastMode,
  selectIsDarkMode,
  selectShowTutorials,
  selectPlayMusic,
  selectPlaySfx,
} from '@/selectors';
import Options from '@/components/options';
import OptionButton from './optionButton';
import OptionLabel from './optionLabel';
import LanguageSelect from './languageSelect';
import ClearConfirmation from './clearConfirmation';
import Credits from './credits';

const SettingsScene = () => {
  const showing = useSelector(
    ({ ui: { showingSettings } }: IState) => showingSettings,
  );
  const isFastMode = useSelector(selectIsFastMode);
  const isDarkMode = useSelector(selectIsDarkMode);
  const playMusic = useSelector(selectPlayMusic);
  const playSfx = useSelector(selectPlaySfx);
  const showTutorials = useSelector(selectShowTutorials);
  const dispatch = useDispatch();

  const [showingLanguageSelect, setShowingLanguageSelect] = useState<boolean>(
    false,
  );
  const [showingClearConfirmation, setShowingClearConfirmation] = useState<
    boolean
  >(false);
  const [showingCredits, setShowingCredits] = useState<boolean>(false);

  //  Don't render if not showing the settings menu
  if (!showing) {
    return null;
  }

  return (
    <>
      <Options
        onClose={() => {
          dispatch(setShowingSettings(false));
        }}
        headerText={<FormattedMessage id="settings" />}
      >
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

        <OptionButton
          onPress={() => {
            setShowingLanguageSelect(true);
          }}
        >
          <OptionLabel>
            <FormattedMessage id="language" />
          </OptionLabel>

          <OptionLabel alignment="right">
            <FormattedMessage id="fullLanguageName" />
          </OptionLabel>
        </OptionButton>

        <OptionButton
          onPress={() => {
            setShowingClearConfirmation(true);
          }}
        >
          <OptionLabel alignment="center">
            <FormattedMessage id="clearProgress" />
          </OptionLabel>
        </OptionButton>

        <OptionButton
          onPress={() => {
            setShowingCredits(true);
          }}
        >
          <OptionLabel alignment="center">
            <FormattedMessage id="credits" />
          </OptionLabel>
        </OptionButton>
      </Options>

      {showingLanguageSelect && (
        <LanguageSelect
          onClose={() => {
            setShowingLanguageSelect(false);
          }}
        />
      )}

      {showingClearConfirmation && (
        <ClearConfirmation
          onClose={() => {
            setShowingClearConfirmation(false);
          }}
        />
      )}

      {showingCredits && (
        <Credits
          onClose={() => {
            setShowingCredits(false);
          }}
        />
      )}
    </>
  );
};

export default memo(SettingsScene);
