import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme, { darkTheme } from '@/theme';
import { selectIsDarkMode } from '@/selectors';

interface IProps {
  children: React.ReactNode;
}

const ConnectedThemeProvider = ({ children }: IProps) => {
  const isDarkMode = useSelector(selectIsDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      {children}
    </ThemeProvider>
  );
};

export default memo(ConnectedThemeProvider);
