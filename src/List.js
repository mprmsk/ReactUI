import React,{useState} from 'react';
import ListItem from './ListItem'
import './App.css';

function List(props) {

  return (
    <div className='App'>   

     {props.energySellerList.map((item) => (
        <ListItem key={item.id} item={item}>
        </ListItem>

        
      ))}
    </div>
  );
}

export default List;
 