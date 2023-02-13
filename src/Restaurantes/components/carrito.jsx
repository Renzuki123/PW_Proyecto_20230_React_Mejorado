import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../restaurant.css'

const Carrito = (props) => {
  const [total, setTotal] = useState(0);

  const handleAddToCart = (item) => {
    const foundItem = props.cart.find(i => i.name === item.name);
    if (foundItem) {
      foundItem.quantity += 1;
      props.setCart([...props.cart]);
    } else {
      props.setCart([...props.cart, { ...item, quantity: 1 }]);
    }
    setTotal(total + parseFloat(item.price));
  };

  return (
    <div className='carrito'>
      <center><h1>Carrito</h1></center>
      <table>
        <thead>
          <tr>
            <th>Comida</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/Restaurantes/estado_pedido">
        <center><button>Realizar Pedido</button></center>
      </Link>
    </div>
  );
};

export default Carrito;