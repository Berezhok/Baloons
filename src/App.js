import React, { useEffect, useState } from 'react';
import { Header } from './component/header';
import catalog from "./catalog.json";
import { MainMenu } from './component/mainMenu';

export const App = () => {
  const [catalogList , setCatalogList] = useState(catalog);
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);
  
  useEffect(()=>{
      setCatalogList(catalog);
  },[]);

  // catalogList.map((el) => {
  //   let sum = 0;
  //   if (basket.includes(el._id)){
  //       sum += el.price;
  //   }
  //   console.log(sum);
  // }


  return (
    <div>
      <Header 
      basket={basket}
      />
      <MainMenu
      list={catalogList}
      favorite={favorite}
      setFavorite={setFavorite}
      basket={basket}
      setBasket={setBasket}
      />
    </div>
  );
}

export default App;
