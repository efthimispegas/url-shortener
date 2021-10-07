import React, { useEffect, useState } from 'react';
import { Box, Grid, Theme, Container, makeStyles, Typography, createStyles } from '@material-ui/core';
import { shortenUrl } from '../../api/requests/url';
import { initialize } from '../../utils/animation';
import CopyToClipBoard from '../../components/CopyToClipBoard/CopyToClipboard';
import Animation from '../../components/Animation/Animation';
import Form from '../../components/Form/Form';
import { description } from '../../data/content/text';

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

  // Local state
  const [url, setUrl] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [shortUrl, setShortUrl] = useState<string>('');
  const [error, setError] = useState<{ error: boolean; message: string | null }>({ error: false, message: null });

  useEffect(() => {
    initialize();
  }, []);

  const handleSubmit = async () => {
    // Reset state
    setError({ error: false, message: null });
    setShortUrl('');
    try {
      const { data } = await shortenUrl({ longUrl: url });
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
      () => setOpen(true),
      (_) => {
        setOpen(false);
        setError({ error: true, message: 'Could not copy url to clipboard' });
      },
    );
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  return (
    <>
      <Animation />
      <Container maxWidth="md" className={classes.root}>
        <Form url={url} onClick={handleSubmit} onChange={handleChange} error={error} />
        <CopyToClipBoard open={open} value={shortUrl} onClick={copyToClipboard} />
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
