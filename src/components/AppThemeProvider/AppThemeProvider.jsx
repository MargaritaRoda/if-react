import lightBackgroundImg from '../../assets/images/background.png';
import { shade } from '../../lib/utils';
import darkBackgroundImg from '../../assets/images/darkBackground.jpg';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/selectors/theme.selectors';
import { ThemeProvider } from 'react-jss';
import React from 'react';

const themes = {
  light: {
    primary: '#3077c6',
    primaryText: '#fff',
    accentLight: '#f5bd41',
    accentDark: '#10367c',
    accentDarkText: '#fff',
    backgroundImageURL: lightBackgroundImg,
    shade,
  },
  dark: {
    primary: '#9a2ea4',
    primaryText: '#f393ff',
    accentDark: '#5a0d66',
    accentDarkText: '#f6c5c5',
    backgroundImageURL: darkBackgroundImg,
    shade,
  },
};

export function AppThemeProvider({ children }) {
  const theme = useSelector(selectTheme);
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
}
