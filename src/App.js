import React, { useEffect, useState } from 'react';
import { Header } from './component/header';
import catalog from "./catalog.json";
import { MainMenu } from './component/mainMenu';

export const App = () => {
  const [catalogList , setCatalogList] = useState(catalog);
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);
  const [cost, setCost] = useState("");

  useEffect(()=>{
      setCatalogList(catalog);
  },[]);

 


  return (
    <div>
      <Header 
      basket={basket}
      list={catalogList}
      cost = {cost}
      setCost = {setCost}
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
