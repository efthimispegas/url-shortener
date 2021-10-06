import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Layout from './components/Layout/Layout';
import Router from './routes/Router';
import theme from './theme';
import './App.css';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Layout>
            <Router />
          </Layout>
        </CssBaseline>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
