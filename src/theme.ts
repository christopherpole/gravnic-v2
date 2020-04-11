const theme = {
  colors: {
    primary: 'red',
    disabled: '#999',
    fonts: {
      primary: 'black',
      secondary: 'white',
    },
  },
  spacing: {
    small: '1%',
    medium: '5%',
    large: '15%',
  },
};

export type ITheme = typeof theme;

export default theme;
