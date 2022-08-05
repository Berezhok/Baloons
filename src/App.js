import React, { useEffect, useState } from 'react';
import { Header } from './component/header';
import catalog from "./catalog.json";
import { MainMenu } from './component/mainMenu';

export const App = () => {
  const [catalogList , setCatalogList] = useState(catalog);
  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favorites")) || []);
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);
  const [cost, setCost] = useState(null);
  const [search, setSearch] = useState("");
  
  const searchItem = (event) =>{
    event.preventDefault();
    setSearch(event.target.value);
    
  };
  
  const filteredList = catalogList.filter( item =>{
    return item.name.toLowerCase().includes(search.toLowerCase());
  });   
    

  useEffect(()=>{
      setCatalogList(catalog);
  },[]);

 


  return (
    <div>
    
      <Header 
      basket={basket}
      list={catalogList}
      setCatalogList={setCatalogList}
      cost = {cost}
      setCost = {setCost}
      searchItem = {searchItem}
      />
      <MainMenu

      list={catalogList}
      favorite={favorite}
      setFavorite={setFavorite}
      basket={basket}
      setBasket={setBasket}
      filteredList={filteredList}
      />
    </div>
  );
}

export default App;
