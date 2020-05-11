const theme = {
  fonts: {
    default: 'AvenirNext-DemiBold',
    bold: 'AvenirNext-Bold',
  },
  colors: {
    primary: '#333',
    secondary: '#666',
    disabled: '#999',
    fonts: {
      primary: 'black',
      secondary: 'white',
    },
    stars: {
      new: 'yellow',
      used: 'white',
    },
  },
  sizing: {
    small: '14px',
    medium: '18px',
    large: '22px',
  },
  spacing: {
    extraSmall: '1%',
    small: '2%',
    medium: '4%',
    large: '10%',
    extraLarge: '15%',
  },
  shadows: {
    default: '2px 2px 2px rgba(0, 0, 0, .3);',
  },
};

export type ITheme = typeof theme;

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    stars: {
      ...theme.colors.stars,
      new: 'white',
      used: 'grey',
    },
  },
};

export default theme;
