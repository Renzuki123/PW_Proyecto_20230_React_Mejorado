import React, { useState } from 'react';
import Carrito from './components/carrito.jsx';

const Restaurant = () => {
  const menu = [
    { name: "Spaghetti Bolognese", price: 10 },
    { name: "Pizza Margherita", price: 12 },
    { name: "Lasagna", price: 15 },
    { name: "Cesar Salad", price: 8 }
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const foundItem = cart.find(i => i.name === item.name);
    if (foundItem) {
      foundItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h1>Menu del Restaurante</h1>
      <div>
        {menu.map((item, index) => (
          <div key={item.name}>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
      <Carrito cart={cart} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Restaurant;