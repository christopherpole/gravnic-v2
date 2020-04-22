import React, { memo } from 'react';
import { TouchableWithoutFeedback, View, Text, Switch } from 'react-native';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import IState from '@/types/state';
import { setShowingSettings, setFastMode } from '@/actions';
import Button from '@/components/button';
import closeImg from '@/assets/close.png';

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

const OptionsWrapper = styled(View)``;

const OptionLabel = styled(Text)`
  font-size: ${(props) => props.theme.sizing.medium};
`;

const OptionWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SettingsScene = () => {
  const showing = useSelector(({ showingSettings }: IState) => showingSettings);
  const isFastMode = useSelector(({ fastMode }: IState) => fastMode);
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
            <OptionLabel>Fast mode</OptionLabel>
            <Switch
              value={isFastMode}
              onValueChange={(val: boolean) => {
                dispatch(setFastMode(val));
              }}
            />
          </OptionWrapper>
        </OptionsWrapper>
      </WrapperInner>
    </Wrapper>
  );
};

export default memo(SettingsScene);
