import { AppBar, Grid, makeStyles, createStyles, Toolbar, Typography, Button } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/logo.svg';

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
    title: {},
    content: {},
    toolbar: theme.mixins.toolbar,
    children: {},
    footer: {
      top: 'auto',
      bottom: 0,
      height: 48,
      justifyContent: 'center',
    },
    text: {
      marginRight: 10,
      marginLeft: 10,
    },
    link: {},
  }),
);

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      {/* Header */}
      <AppBar position="fixed" variant="elevation" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container alignItems="center">
            <Grid item>
              <img src={logo} alt="url-shortener-logo" className={classes.logo} />
            </Grid>
            <Grid item container xs={11} justify="flex-start">
              <Grid item>
                <Typography className={classes.title} variant="h1" noWrap>
                  Free URL Shortener
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* // Children */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.children}>{children}</div>
      </main>
      {/* Footer */}
      <AppBar position="fixed" color="secondary" variant="outlined" className={classes.footer}>
        <Grid item container alignItems="center" justify="space-between">
          <Grid item container xs={3} justify="center">
            <Grid item>
              <Typography className={classes.text} variant="h4" noWrap>
                All rights reserved © 2021
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={6} justify="center">
            <Grid item>
              <Typography className={classes.text} variant="h4" noWrap>
                Made with{' '}
                <span role="img" aria-label="developer">
                  ❤️
                </span>{' '}
                Tim Pegas
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={3} justify="center">
            <Grid item>
              <Button variant="text" href="https://github.com/efthimispegas" disableRipple>
                <Typography className={classes.link} variant="h4" noWrap>Github</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Layout;
