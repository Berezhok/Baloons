import React from 'react';
import { List } from '../List/list';
import "./style.css";

export const MainMenu = ({list,setFavorite,favorite,basket, setBasket}) => {
  return (
    <div className='menu'>
      <div className='left__menu'>
        <div><button> Все шары</button></div>
        <div><button> Для детей</button></div>
        <div><button> Всякое</button></div>
        <div><button> Для влюбленных</button></div>
      </div>
      <div className='right__menu'>
            <List 
            list={list}
            setFavorite={setFavorite}
            favorite={favorite}
            basket={basket}
            setBasket={setBasket}
            />
      </div>
    </div>
  )
}
