import { makeStyles, Theme, createStyles } from '@material-ui/core';
import classnames from 'classnames';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spacing: {
      padding: theme.spacing(8, 0),
    },
  }),
);

const Animation = () => {
  const classes = useStyles();
  return <div className={classes.spacing} id="animation" />;
};

export default Animation;
