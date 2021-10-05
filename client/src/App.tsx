import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Layout from './components/Layout/Layout';
import theme from './theme';
import './App.css';

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Layout />
        </CssBaseline>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
