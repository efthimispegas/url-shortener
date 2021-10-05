import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { background, error, primary, secondary, success, textGrey, warning } from './palette';
import typography from './resets';
import roboto from './font';

declare module '@material-ui/core/styles/createPalette' {
  // eslint-disable-next-line
  interface Palette {
    textGrey: Palette['primary'];
  }
  // eslint-disable-next-line
  interface PaletteOptions {
    textGrey: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary,
    secondary,
    error,
    warning,
    textGrey,
    success,
    background,
    text: {
      primary: '#212121',
    },
    tonalOffset: 0,
  },

  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1115,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [roboto as React.CSSProperties],
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        fontSize: 'inherit',
        fontWeight: 'inherit',
      },
    },
    MuiToolbar: {
      root: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
});

export default theme;
