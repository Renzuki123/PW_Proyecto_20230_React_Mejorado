import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Carrito</h1>
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
        <button>Realizar Pedido</button>
      </Link>
    </div>
  );
};

export default Carrito;