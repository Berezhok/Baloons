import React from 'react';
import { CardItem } from '../card';
import catalog from "../../catalog.json";


export const List = () => {

  return (
    <div>
        {catalog?.map((el) => (
            <CardItem
            key = {el._id}
            price = {el.price} />
        )
        )};
    </div>
  )
}
