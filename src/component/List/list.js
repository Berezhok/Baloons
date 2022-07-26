import React from 'react';
import { CardItem } from '../card';
import "./style.css";


export const List = ({list,favorite,setFavorite, basket , setBasket}) => {

  return (
    <div className='list'>
        {list.map((el)=> (
          <CardItem 
          key={el._id}
          itemBall = {el}
          price={el.price}
          name = {el.name}
          data = {el.created_at}
          image = {el.pictures}
          isInFavorite = {favorite.includes(el._id)}
          setFavorite= {setFavorite}
          isInBasket = {basket.includes(el._id)}
          setBasket= {setBasket}
          />
          
        ))
        
        }
    </div>
  )
}
