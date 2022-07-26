import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import "./style.css";

export const CardItem = ({name,price,data,image, itemBall,isInFavorite,setFavorite,setBasket,isInBasket}) => {
  const dayjs = require('dayjs');

  const writeLS = (itemID, key) => {
    const favorites = JSON.parse(localStorage.getItem(key)) || [];
    favorites.push(itemID);
    localStorage.setItem(key, JSON.stringify(favorites));
  };

  const removeLS = (itemID,key) => {
    const favorites = JSON.parse(localStorage.getItem(key)) || [];
    const filterFavorites = favorites.filter((el) => itemID !== el);
    localStorage.setItem(key, JSON.stringify(filterFavorites));
  };

  const addFavorites = () => {
    writeLS(itemBall._id, "favorites");
    setFavorite(prevState=> [...prevState, itemBall._id]);
  };

  const removeFavorites = () => {
        removeLS(itemBall._id, "favorites");
        setFavorite((prevState)=> [...prevState.filter((el)=> itemBall._id!== el)]);
  };

  const addBasket = () => {
    writeLS(itemBall._id, "basket");
    setBasket(prevState=> [...prevState, itemBall._id]);
  };

  const removeBasket = () => {
        removeLS(itemBall._id, "basket");
        setBasket((prevState)=> [...prevState.filter((el)=>itemBall._id!== el)]);
  };

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
        {isInFavorite ? 
        (<IconButton onClick={removeFavorites} aria-label="add to favorites">
         
        <FavoriteIcon  />
        </IconButton>) :
        (<IconButton onClick={addFavorites}  aria-label="add to favorites">
         
        <FavoriteBorderOutlinedIcon  />
        </IconButton>)
        }
        {isInBasket ?
        (<IconButton onClick={removeBasket} aria-label="add to basket">
        <Typography style={{fontSize:"14px", marginRight:"10px" }}>Удалить из корзины</Typography> 
        <ShoppingBasketIcon />
        </IconButton> )
        :
        (<IconButton onClick={addBasket} aria-label="add to basket">
        <Typography style={{fontSize:"14px", marginRight:"10px" }}>Добавить в корзину</Typography> 
        <ShoppingBasketOutlinedIcon/>
        </IconButton> )
        }     
        </CardActions>
    </Card>
    </div>
  )
}
