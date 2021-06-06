import { Component } from 'react';

function MenuList(props) {

  const items = props.items.map((item) => (
    <li key={item.name}>
    <h2>{item.name}</h2>
    <p>{item.description}</p>
    <p>{item.price}</p>
    </li>
  ));
  return(
    <ul>{items}</ul>
  )
}


export default MenuList
