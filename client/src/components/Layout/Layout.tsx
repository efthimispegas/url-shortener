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
    content: {},
    children: {},
  }),
);

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.children}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
