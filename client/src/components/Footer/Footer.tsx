import { AppBar, Grid, makeStyles, createStyles, Typography, Button } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
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
  }),
);

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="secondary" variant="outlined" className={classes.footer}>
      <Grid item container alignItems="center" justifyContent="space-between">
        <Grid item container xs={3} justifyContent="center">
          <Grid item>
            <Typography className={classes.text} variant="h5" noWrap>
              All rights reserved © 2021
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={6} justifyContent="center">
          <Grid item>
            <Typography className={classes.text} variant="subtitle2" noWrap>
              Made with{' '}
              <span role="img" aria-label="developer">
                ❤️
              </span>{' '}
              Tim Pegas
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={3} justifyContent="center">
          <Grid item>
            <Button variant="text" href="https://github.com/efthimispegas" disableRipple>
              <Typography variant="body2" noWrap>
                Github
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
