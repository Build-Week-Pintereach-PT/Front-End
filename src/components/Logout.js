import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ButtDiv = styled.div`
display:flex;
justify-content: center;
`

export default function LogOut() {
  const classes = useStyles();

  return (
    <ButtDiv className={classes.root}>
      <Button variant="contained">Log Out</Button>
    </ButtDiv>
  );
}