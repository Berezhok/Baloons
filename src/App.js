import React, { useEffect, useState } from 'react';
import { Header } from './component/header';
import catalog from "./catalog.json";
import { MainMenu } from './component/mainMenu';

export const App = () => {
  const [catalogList , SetCatalogList] = useState(catalog);

  useEffect(()=>{
      SetCatalogList(catalog);
  },[catalogList]);
  
  
  return (
    <div>
      <Header/>
      <MainMenu
      list={catalogList}
      />
    </div>
  );
}

export default App;
