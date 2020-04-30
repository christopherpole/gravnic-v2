import React, { memo } from 'react';
import { TouchableWithoutFeedback, View, Text, Switch } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import LanguageCodes from '@/types/languageCodes';
import IState from '@/types/state';
import messages from '@/data/translations';
import { setShowingSettings, setShowingLevelSelect } from '@/actions/ui';
import { setFastMode, setLocale, clearProgress } from '@/actions/user';
import Button from '@/components/button';
import closeImg from '@/assets/close.png';
import { loadInitialLevel } from '@/actions/game';

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

const CloseButton = styled(Button)`
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
  const isFastMode = useSelector(({ user: { fastMode } }: IState) => fastMode);
  const locale = useSelector((state: IState) => state.user.locale);
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
            image={closeImg}
            onPress={() => {
              dispatch(setShowingSettings(false));
            }}
          />
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
