import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      background: theme.palette.primary.main,
    },
    logo: {
      width: 32,
      height: 32,
      margin: theme.spacing(0, 1),
    },
    toolbar: theme.mixins.toolbar,
  }),
);

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <main>
        <div className={classes.toolbar} />
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
