import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../restaurant.css';

const Carrito = (props) => {
  const [total, setTotal] = useState(0);
  console.log("Total:", total);
  sessionStorage.setItem("total", total);

  useEffect(() => {
    // Calcula el total localmente
    const newTotal = props.cart.reduce((acc, item) => {
      return acc + parseFloat(item.precio) * item.quantity;
    }, 0);
    setTotal(newTotal);
  }, [props.cart]);

  const handleAddToCart = (item) => {
    const foundItem = props.cart.find(i => i.name === item.name);
    if (foundItem) {
      foundItem.quantity += 1;
      props.setCart([...props.cart]);
    } else {
      props.setCart([...props.cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    const foundItem = props.cart.find(i => i.name === item.name);
    if (foundItem.quantity === 1) {
      const newCart = props.cart.filter(i => i.name !== item.name);
      props.setCart(newCart);
    } else {
      foundItem.quantity -= 1;
      const newCart = [...props.cart];
      props.setCart(newCart);
    }
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
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map(item => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.precio * item.quantity}</td>
              <td><button onClick={() => handleRemoveFromCart(item)}>Eliminar</button></td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
      <Link to= {{pathname: "/Restaurantes/registro_pedido", state: { total: total }}}>
        <center><button>Realizar Pedido</button></center>
      </Link>
    </div>
  );
};

export default Carrito;