const theme = {
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
    small: '10px',
    medium: '15px',
    large: '20px',
  },
  spacing: {
    extraSmall: '1%',
    small: '2%',
    medium: '4%',
    large: '10%',
    extraLarge: '15%',
  },
};

export type ITheme = typeof theme;

export default theme;
