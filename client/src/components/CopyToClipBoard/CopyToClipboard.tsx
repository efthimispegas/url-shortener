import React from 'react';
import {
  Box,
  Grid,
  Theme,
  Tooltip,
  useTheme,
  TextField,
  IconButton,
  makeStyles,
  ButtonGroup,
  createStyles,
} from '@material-ui/core';
import copy from '../../assets/svg/copy.svg';

type CopyToClipBoardProps = {
  open: boolean;
  value: string;
  onClick: () => void;
};

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
    copy: {
      width: 24,
      height: 24,
    },
    buttonGroup: {
      backgroundColor: theme.palette.textGrey.light,
      padding: theme.spacing(0, 2),
    },
  }),
);

const CopyToClipBoard: React.FC<CopyToClipBoardProps> = ({ open, value, onClick }) => {
  const theme = useTheme();
  const classes = useStyles();
  return value.length ? (
    <Grid container xs={12} justifyContent="center">
      <Box component="form" marginY={4} minWidth={500} className={classes.box}>
        <Grid item xs={12}>
          <ButtonGroup fullWidth className={classes.buttonGroup}>
            <TextField
              margin="dense"
              value={value}
              variant="standard"
              InputProps={{
                readOnly: true,
                disableUnderline: true,
                style: { fontWeight: 500, color: theme.palette.secondary.dark },
              }}
            />
            <Tooltip title="Text copied!" placement="bottom-start" open={open}>
              <IconButton edge="end" title="Copy" color="primary" onClick={onClick} aria-label="Copy to clipboard">
                <img src={copy} className={classes.copy} alt="copy-short-url" />
              </IconButton>
            </Tooltip>
          </ButtonGroup>
        </Grid>
      </Box>
    </Grid>
  ) : null;
};

export default CopyToClipBoard;
