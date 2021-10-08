import React from 'react';
import { makeStyles, createStyles, Grid, Box, TextField, Button, Typography, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
    form: {
      display: 'flex',
      flexGrow: 1,
      marginRight: theme.spacing(1),
      animation: '$fadeIn 3000ms ',
      transformOrigin: 'top center',
      '@global': {
        '@keyframes fadeIn': {
          '0%': {
            opacity: 0,
          },
          '60%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
    box: {
      display: 'flex',
      width: '80%',
      flexDirection: 'column',
    },
    input: {
      width: '80%',
      '& .MuiInputBase-root': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
    button: {
      width: '20%',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      '&:hover': {
        backgroundColor: theme.palette.button.light,
      },
    },
    error: {
      marginTop: theme.spacing(0.5),
      color: theme.palette.error.light,
    },
  }),
);

type FormProps = {
  url: string;
  onClick: () => void;
  onChange: React.ChangeEventHandler;
  error: { error: boolean; message: string | null };
}

const Form: React.FC<FormProps> = ({ onClick, onChange, error, url }) => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} justifyContent="center" className={classes.form}>
      <Box component="form" minWidth={500} className={classes.box}>
        <Grid container item>
          <TextField
            autoFocus
            value={url}
            data-cy="form"
            autoComplete="off"
            variant="outlined"
            onChange={onChange}
            error={error.error}
            className={classes.input}
            placeholder="Enter your URL here..."
            inputProps={{ style: { fontWeight: 400 } }}
          />
          <Button
            disableElevation
            color="secondary"
            variant="contained"
            onClick={onClick}
            className={classes.button}
          >
            <Typography variant="h4">Shorten URL</Typography>
          </Button>
        </Grid>
        {error.error && (
          <Grid container item xs={12} className={classes.error}>
            <Grid item>
              <Typography variant="subtitle2">{error.message}</Typography>
            </Grid>
          </Grid>
        )}
      </Box>
    </Grid>
  );
};

export default Form;
