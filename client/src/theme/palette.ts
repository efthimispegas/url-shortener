import { PaletteColorOptions, TypeBackground } from '@material-ui/core/styles/createPalette';

const primary: PaletteColorOptions = {
  main: '#1F2C3B',
  light: '#3A4C62',
  contrastText: '#FFFFFF',
};

const secondary: PaletteColorOptions = {
  main: '#A9CADE',
  light: '#EEF5FD',
  dark: '#5E8EAC',
  contrastText: '#212121',
};

const error: PaletteColorOptions = {
  main: '#F44336',
  light: '#F8869B',
  dark: '#8E2642',
};

const warning: PaletteColorOptions = {
  main: '#666666',
  light: '#FFD872',
  dark: '#B6780A',
};

const success: PaletteColorOptions = {
  main: '#4CAF50',
};

const background: TypeBackground = { default: '#FFFFFF', paper: '#F2F5F6' };

const textGrey: PaletteColorOptions = {
  main: '#666666',
  dark: '#1F2A56',
  light: '#CECECE',
};

const button: PaletteColorOptions = {
  main: '#A9CADE',
  light: '#B7D6E9',
};

export { primary, secondary, error, warning, success, background, textGrey, button };
