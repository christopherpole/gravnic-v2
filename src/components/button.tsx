import React from 'react';
import styled, { css } from 'styled-components';
import {
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';

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

const StyledText = styled(Text)`
  border: 1px solid black;
`;

interface IProps {
  onPress?: () => void;
  disabled?: boolean;
  image?: ImageSourcePropType;
  children?: React.ReactNode;
}

const Button = ({ image, children, ...rest }: IProps) => (
  <Wrapper {...rest}>
    {image && <StyledImage source={image} />}
    {children && <StyledText>{children}</StyledText>}
  </Wrapper>
);

export default Button;
