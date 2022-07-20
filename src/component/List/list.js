import React from 'react';
import { CardItem } from '../card';
import "./style.css";


export const List = ({list}) => {

  return (
    <div className='list'>
        {list.map((el)=> (
          <CardItem 
          key={el._id}
          price={el.price}
          name = {el.name}
          data = {el.created_at}
          image = {el.pictures}
          />
          
        ))
        
        }
    </div>
  )
}
