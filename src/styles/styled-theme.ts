import { DefaultTheme } from 'styled-components';
import media from './media';

const theme: DefaultTheme = {
  palette: {
    primary: {
      light: '#69696a',
      main: '#28282a',
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#ff3366',
      dark: '#e62958',
    },
    warning: {
      light: '#fff5f8',
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: '#69696a',
      main: '#69696a',
      dark: '#69696a',
    },
    success: {
      light: '#69696a',
      main: '#69696a',
      dark: '#69696a',
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
  breakpoints: {
    values: {
      ...media,
    },
  },
};

export default theme;
