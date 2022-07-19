import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import catalog from "../../catalog.json";

export const CardItem = () => {
  const dayjs = require('dayjs');

  return (
    <div>
    <Card sx={{ width: 345 }}>
      <CardHeader
        title={catalog.name}
      />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
             Создан {dayjs(catalog.created_at).format('DD-MM-YYYY [в] hh:mm')}
          </Typography>
      
      <CardMedia
        component="img"
        height="194"
        image= "https://static.tildacdn.com/tild6362-3966-4339-b166-643331623235/photo.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {catalog.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        </CardActions>
    </Card>
    </div>
  )
};
