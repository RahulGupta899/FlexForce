import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

const variants = ['h1', 'h3', 'h3', 'caption'];


export default function Loader() {
  return (
    <div>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
          <Skeleton /> 
        </Typography>
      ))}
    </div>
  );
}
