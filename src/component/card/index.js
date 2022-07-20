import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./style.css";

export const CardItem = ({name,price,data,image}) => {
  const dayjs = require('dayjs');

  return (
    <div className='card'>
    <Card sx={{ width: 345 }}>
      <CardHeader
       title =  {name}
      />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
             Создан {dayjs(data).format('DD-MM-YYYY [в] hh:mm')}
          </Typography>
      
      <CardMedia
        component="img"
        height="194"
        image= {image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {price}
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
}
