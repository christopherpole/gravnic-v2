const theme = {
  fonts: {
    default: 'AvenirNext-DemiBold',
    bold: 'AvenirNext-Bold',
  },
  colors: {
    primary: '#333',
    secondary: '#666',
    tertiary: '#aaa',
    disabled: '#999',
    fonts: {
      primary: 'white',
      secondary: 'black',
    },
    checkbox: {
      unchecked: 'grey',
      checked: 'green',
    },
    stars: {
      new: 'yellow',
      used: 'white',
    },
  },
  sizing: {
    xxs: '3px',
    extraSmall: '15px',
    small: '18px',
    medium: '18px',
    large: '22px',
    extraLarge: '30px',
    xxl: '40px',
    border: '2px',
  },
  spacing: {
    small: '10px',
    medium: '20px',
    large: '40px',
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
    checkbox: {
      ...theme.colors.checkbox,
      checked: 'white',
    },
  },
};

export default theme;
