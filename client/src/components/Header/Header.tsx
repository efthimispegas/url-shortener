import { AppBar, Grid, makeStyles, createStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { title } from '../../data/content/text';
import logo from '../../assets/svg/logo.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      background: theme.palette.primary.main,
    },
    logo: {
      width: 32,
      height: 32,
      margin: theme.spacing(0, 1),
    },
    toolbar: theme.mixins.toolbar,
    text: {
      marginRight: 10,
      marginLeft: 10,
    },
    link: {},
  }),
);

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" variant="elevation" className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Grid container alignItems="center">
          <Grid item>
            <img src={logo} alt="url-shortener-logo" className={classes.logo} />
          </Grid>
          <Grid item container xs={11} justifyContent="flex-start">
            <Grid item>
              <Typography variant="h1" noWrap>
                {title}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
