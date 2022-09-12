import React from 'react';
import Item from '../Item/Item';

export const ItemList = ({items}) => {
  return (
    <div className="row">
        {items.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} categoria={item.categoria} imagen={item.imagen} precio={item.precio}/>)}
    </div>
  )
}

export default ItemList;