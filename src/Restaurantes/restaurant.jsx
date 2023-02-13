import React, { useState } from 'react';
import Carrito from './components/carrito.jsx';
import './restaurant.css'

const Restaurant = () => {
  const menu = [
    { name: "Spaghetti Bolognese", price: 10, image: "https://supervalu.ie/thumbnail/1440x480/var/files/real-food/recipes/Uploaded-2020/spaghetti-bolognese-recipe.jpg"},
    { name: "Pizza Margherita", price: 12, image: "https://placeralplato.com/files/2015/06/pizza-Margarita.jpg"},
    { name: "Lasagna", price: 15, image: "https://www.diariamenteali.com/medias/receta-lasgnable-lasagna-de-carne-1900Wx500H?context=bWFzdGVyfGltYWdlc3w0NDg2NzY2fGltYWdlL3BuZ3xoMTgvaGVkLzkyNjA1NzI2MzkyNjIvcmVjZXRhLWxhc2duYWJsZS1sYXNhZ25hLWRlLWNhcm5lXzE5MDBXeDUwMEh8YzQyNDA3YWE1Nzc4YWZlY2YwYTBhZjkwOGFhMzhmYmMxMzQ3NTY2NDlkMmYxZDQ4NWMzNGY4Njk5YzY2OGFkMQ"},
    { name: "Cesar Salad", price: 8, image: "https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/b89f8de9-0f93-4976-b318-9ab04db353bc/Derivates/d3a08a3c-abb2-452e-9121-168f67c992c8.jpg"}
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
          <div className = "info-plato" key={item.name}>
            <div className='plato-imagen'> 
              <img src={item.image} alt={item.image} /> 
            </div>
            <h2>{item.name} - ${item.price}</h2>
            <button onClick={() => handleAddToCart(item)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
      <Carrito cart={cart} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default Restaurant;