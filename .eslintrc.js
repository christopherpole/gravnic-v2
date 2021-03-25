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
  ],
  ignorePatterns: ["/*.*"],
  plugins: ['prettier'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
    'react/require-default-props': 'off',
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
