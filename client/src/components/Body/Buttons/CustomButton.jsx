import { Button } from '@mui/material';
import React from 'react';

function CustomButton(props) {
  const bgc = props.bgc ? props.bgc : '';
  const color = props.col ? props.col : '#2941ab';
  const classes = `link-button scale-button ${props.buttonColor}`;
  return (
    <Button
      variant="contained"
      sx={{
        mx: 2,
        color: color,
        backgroundColor: bgc,
      }}
      className={classes}
      size="large"
    >
      {props.name}
    </Button>
  );
}

export default CustomButton;
