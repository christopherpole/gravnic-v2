interface IColorScheme {
  background: string;
  icons: '#fff' | '#000';
  moveCounter: {
    new: string;
    used: '#fff' | '#000';
  };
  blocks: {
    '#ff0000': string;
    '#FF8C00': string;
    '#FFFF00': string;
    '#008000': string;
    '#0000FF': string;
    '#800080': string;
  };
}

export default IColorScheme;
