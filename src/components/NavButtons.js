import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function NavButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button color="primary" href='/'>Home</Button>
      <Button color="primary" href='/login'>Log In</Button>
      <Button color="primary" href='/signup'>Sign Up</Button>
      <Button color="primary" href='/logout'>Log Out</Button>
      
    </div>
  );
}