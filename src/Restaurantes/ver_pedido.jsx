import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import TopNav from '../Global/TopNav';
import { Link } from 'react-router-dom';

/*
const verPedido = () => {
    const [pedidos, setPedidos] = useState([
        { id: 1, nombre: "Renzo", plato: "fideos", direccion: "Pueblo Libre", estado: "en preparación", codigo: "ABC123" },
        { id: 2, nombre: "Juan", plato: "pizza", direccion: "Jesus Maria", estado: "en preparación", codigo: "DEF456" },
        { id: 3, nombre: "Roberto", plato: "ensalada", direccion: "Los Olivos", estado: "en preparación", codigo: "GHI789" }
    ]);

    return (
        <div>
            <center><h1>Estado del Pedido</h1></center>
            <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Plato</th>
                <th>Direccion</th>
                <th>Estado</th>
                <th>Código</th>
            </tr>
            </thead>
            <tbody>
                {pedidos.map(pedido => (
                    <tr key={pedido.id}>
                        <td>{pedido.id}</td>
                        <td>{pedido.nombre}</td>
                        <td>{pedido.plato}</td>
                        <td>{pedido.direccion}</td>
                        <td>{pedido.estado}</td>
                        <td>{pedido.codigo}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
};
*/
function EstadoPedido() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    async function fetchPedidos() {
      const response = await fetch('http://localhost:8000/endpoints/pedidos');
      const data = await response.json();
      setPedidos(data.pedidos);
    }
    fetchPedidos();
  }, []);

  const cambiarEstadoPedido = (id, nuevoEstado) => {
    fetch('http://127.0.0.1:8000/endpoints/cambiarEstado', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: id, estado: nuevoEstado})
    })
    .then(response => {
      console.log(response);
      setPedidos(pedidos.map(pedido => {
        if (pedido.id === id) {
          return {
            ...pedido,
            estado: nuevoEstado
          };
        }
        return pedido;
      }));
    })
    .catch(error => {
      console.log(error);
    });
  }
  
  return (
    <div>
      <header className="head1">
        <nav>
          <a href="/main">Inicio </a>
          <a href="/categorias"> Categorías </a>
          <a href="/registro"> Registro </a>
          <a href="/Restaurantes/Ver_pedido"> Ordenes </a>
        </nav>
      </header>
      <center><h1>Estado de pedidos</h1></center>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Detalles</th>
            <th>Dirección</th>
            <th>Método de pago</th>
            <th>Código</th>
            <th>Estado</th>
            <th>Total</th>
            <th>Cambiar Estado</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(pedido => (
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.nombre}</td>
              <td>{pedido.detalles}</td>
              <td>{pedido.direccion}</td>
              <td>{pedido.metodo}</td>
              <td>{pedido.codigo}</td>
              <td>{pedido.estado}</td>
              <td>{pedido.total}</td>
              <td>
                <button
                  onClick={() => {
                    cambiarEstadoPedido(pedido.id, 'T');
                  }}
                >
                  Terminado
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EstadoPedido;