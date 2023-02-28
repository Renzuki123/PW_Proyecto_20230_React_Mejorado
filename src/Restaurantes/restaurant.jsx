import React, { useState, useEffect } from 'react';
import Carrito from './components/carrito.jsx';
import { Link } from 'react-router-dom';
import './restaurant.css';

const Restaurant = () => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/endpoints/platosgenericos')
      .then(response => response.json())
      .then(data => {
        console.log("ABCDE", data.platos_genericos)
        setMenu(data.platos_genericos);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
      });
  }, []);
  const handleAddToCart = (item) => {
    const foundItem = cart.find(i => i.name === item.name);
    if (foundItem) {
      foundItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const handleRemoveFromCart = (item) => {
    const foundItem = cart.find(i => i.name === item.name);
    if (foundItem) {
      if (foundItem.quantity === 1) {
        const newCart = cart.filter(i => i.name !== item.name);
        setCart(newCart);
      } else {
        foundItem.quantity -= 1;
        setCart([...cart]);
      }
    }
  };
  return (
    <div>
      <center><h1>Menu del Restaurante</h1></center>
      <div>
        {menu.map((item, index) => (
          <div className="info-plato" key={item.name}>
            <div className='plato-imagen'>
              <img src={item.imagen} alt={item.imagen} />
            </div>
            <h2>{item.name} - ${item.precio}</h2>
            <button onClick={() => handleAddToCart(item)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
      <Carrito cart={cart} setCart={setCart} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};
export default Restaurant;

/*
const Restaurant = () => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000/endpoints/platosgenericos')
      .then(response => response.json())
      .then(data => {
        setMenu(data.platos_genericos);
      })
      .catch(error => {
        console.error('Error fetching menu:', error);
      });
  }, []);

  const handleAddToCart = (item) => {
    const foundItem = cart.find(i => i.name === item.name);
    if (foundItem) {
      foundItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    // Usar newCart en lugar de cart en la solicitud POST
    const newCart = foundItem ? [...cart] : [...cart, { ...item, quantity: 1 }];
    fetch('http://localhost:8000/endpoints/platosgenericos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCart)
    })
    .then(response => response.json())
    .then(data => {
      setTotal(data.total);
    })
    .catch(error => {
      console.error('Error fetching total:', error);
    });
  };

  const handleRemoveFromCart = (item) => {
    const foundItem = cart.find(i => i.name === item.name);
    if (foundItem) {
      if (foundItem.quantity === 1) {
        const newCart = cart.filter(i => i.name !== item.name);
        setCart(newCart);
      } else {
        foundItem.quantity -= 1;
        setCart([...cart]);
      }
      // Usar newCart en lugar de cart en la solicitud POST
      const newCart = foundItem ? [...cart] : cart.filter(i => i.name !== item.name);
      fetch('http://localhost:8000/endpoints/platosgenericos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCart)
      })
      .then(response => response.json())
      .then(data => {
        setTotal(data.total);
      })
      .catch(error => {
        console.error('Error fetching total:', error);
      });
    }
  };

  
  const handleCheckout = () => {
    fetch('http://localhost:8000/endpoints/procesar_pedido', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: cart })
    })
    .then(response => response.json())
    .then(data => {
      setTotal(data.total);
      setCart([]);
    })
    .catch(error => {
      console.error('Error procesando los platos:', error);
    });
  };
  
  return (
    <div>
      <center><h1>Menu del Restaurante</h1></center>
      <div>
        {menu.map((item, index) => (
          <div className="info-plato" key={item.name}>
            <div className='plato-imagen'>
              <img src={item.imagen} alt="Imagen del plato" />
            </div>
            <div className='plato-info'>
              <h2>{item.name}</h2>
              <p>{item.descripcion}</p>
              <p>Precio: {item.precio}</p>
              <button onClick={() => handleAddToCart(item)}>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
      <Carrito cart={cart} setCart={setCart} total={total} handleCheckout={handleCheckout} handleRemoveFromCart={handleRemoveFromCart} />
      <button
        className="btn btn-primary btn-block"
        onClick={() => {
          fetch('http://localhost:8000/endpoints/procesar_pedido', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              items: cart.map(item => ({ name: item.name, quantity: item.quantity, precio: item.precio })),
              total: total
            })
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              setCart([]);
              setTotal(0);
              navigate('/registrar_pedido');
            } else {
              console.error('Error al procesar pedido:', data.error);
            }
          })
          .catch(error => {
            console.error('Error al procesar pedido:', error);
          });
        }}
      >
        Realizar Pedido
      </button>
    </div>
  );
}
export default Restaurant;
*/