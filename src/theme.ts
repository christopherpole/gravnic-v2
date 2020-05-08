const theme = {
  fonts: {
    default: 'AvenirNext-DemiBold',
    bold: 'AvenirNext-Bold',
  },
  colors: {
    background: 'rgb(252, 241, 233)',
    primary: 'red',
    disabled: '#999',
    fonts: {
      primary: 'black',
      secondary: 'white',
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

export default theme;
