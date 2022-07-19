import React from 'react';
import { Outlet } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
  const list_items = ['Coffe', 'Tea', 'Milk'];
  return (
    <div>
      <Outlet />
      <h2>HomePage</h2>
      <ul>
          {list_items.map((item) => <li key={uuidv4()}>{item}</li>)}
        </ul>
    </div>
  )
}

export default HomePage;