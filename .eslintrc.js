module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 6,
    project: './tsconfig.json',
  },
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['prettier'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'global-require': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    },
  },
};
