import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function VidoeCard({url}) {
  return (
    <a
        // href='http://google.com'
    >
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={url}
      />
      <CardContent>
        <Typography>Video Name along with its channel Name and whatever the dummy data here</Typography>
      </CardContent>
    </Card>
    </a>

  );
}