import React, { useEffect, useState } from 'react';
import { Box, Container, createStyles, Grid, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import { useHistory } from 'react-router';
import { shortenUrl } from '../../api/requests/url';
import { initialize } from '../../utils/animation';
import Animation from '../../components/Animation/Animation';
import { description } from '../../data/content/text';
import Form from '../../components/Form/Form';
import _theme from '../../theme';
import { redirect } from '../../api/requests/redirect';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
    },
    box: {
      display: 'flex',
      width: '80%',
      flexDirection: 'column',
    },
    shortUrl: {},
    description: {
      textAlign: 'center',
      margin: theme.spacing(4, 8, 0, 8),
      padding: theme.spacing(0, 8),
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
  }),
);

const Home: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  // Local state
  const [url, setUrl] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string>('');
  const [error, setError] = useState<{ error: boolean; message: string | null }>({ error: false, message: null });

  useEffect(() => {
    initialize();
  }, []);

  const handleSubmit = async () => {
    // Reset state
    setError({ error: false, message: null });
    setCode('');
    setShortUrl('');
    try {
      const { data } = await shortenUrl({ longUrl: url });
      setCode(data.urlCode);
      setShortUrl(`${process.env.REACT_APP_API_URL}/redirect/${data.urlCode}`);
    } catch (e: any) {
      setError({ error: true, message: 'Invalid entry' });
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUrl(e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl).then(
      () => {
        console.log('Async: Copying to clipboard was successful!');
      },
      (_) => {
        setError({ error: true, message: 'Could not copy url to clipboard' });
      },
    );
  };

  const handleRedirect = async () => {
    try {
      const { data: origin } = await redirect(code);
      // console.log(origin);
      // window.open(origin, '_blank');
    } catch (e: any) {
      setError({ error: true, message: 'Something went wrong. Please try again later' });
    }
  };

  return (
    <>
      <Animation />
      <Container maxWidth="md" className={classes.root}>
        <Form url={url} onClick={handleSubmit} onChange={handleChange} error={error} />
        {shortUrl.length ? (
          <Grid container item xs={12} justifyContent="center" className={classes.shortUrl}>
            <Box component="form" marginY={4} minWidth={500} className={classes.box}>
              <Grid container item>
                <TextField
                  fullWidth
                  value={shortUrl}
                  variant="outlined"
                  onClick={handleRedirect}
                  className={classes.shortUrl}
                  InputProps={{
                    readOnly: true,
                    style: { fontWeight: 500, color: _theme.palette.secondary.main },
                  }}
                />
              </Grid>
            </Box>
          </Grid>
        ) : null}
        <Box marginY={8}>
          <Grid container item xs={12} justifyContent="center" alignItems="center">
            <Grid container item justifyContent="center" className={classes.description}>
              <Typography variant="h1">{description.title}</Typography>
            </Grid>
            <Grid container item justifyContent="center" className={classes.description}>
              <Typography variant="subtitle1">{description.content}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
