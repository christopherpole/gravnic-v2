import React from 'react';
import styled, { css } from 'styled-components';
import { Image, TouchableOpacity, ImageSourcePropType } from 'react-native';

const Wrapper = styled(TouchableOpacity)`
  margin: 0 ${(props) => props.theme.spacing.medium};
  height: 40px;
  width: 40px;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0;
    `}
`;

const StyledImage = styled(Image)`
  display: flex;
  height: 100%;
  width: 100%;
`;

interface IProps {
  onPress?: () => void;
  disabled?: boolean;
  image: ImageSourcePropType;
}

const Button = ({ image, ...rest }: IProps) => (
  <Wrapper {...rest}>
    <StyledImage source={image} />
  </Wrapper>
);

export default Button;
