import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <a
        href="https://marcelocortez.dev/"
        rel="noreferrer noopener"
        target="_blank"
      >
        Marcelo Cortez Dev
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Footer;
