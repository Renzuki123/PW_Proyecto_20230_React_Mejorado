import React, { Component } from 'react';
import axios from 'axios';

class Ordenes extends Component {//clase Ordenes define un componente de React que hereda de la clase Component. 
  //Esto significa que el componente tiene su propio estado interno
  constructor(props) {//método especial en una clase de React que se llama automáticamente cuando se crea una instancia de la clase.
    super(props); //super(props) llama al constructor de la clase padre 
    //Componente de React para asegurarse de que todas las funcionalidades y propiedades de React sean heredadas y estén disponibles en la clase Ordenes.
    this.state = {
      pedidos: [
        {
          id: 1,
          alimento: 'Hamburguesa',
          precio: 100,
          fecha: '2023-02-09',
          hora: '13:00',
          estado: 'pendiente',
        },
        {
          id: 2,
          alimento: 'Pizza',
          precio: 150,
          fecha: '2023-02-09',
          hora: '14:00',
          estado: 'pendiente',
        },
        {
          id: 3,
          alimento: 'Ensalada',
          precio: 80,
          fecha: '2023-02-09',
          hora: '15:00',
          estado: 'pendiente',
        },
        {
          id: 4,
          alimento: 'Sushi',
          precio: 200,
          fecha: '2023-02-09',
          hora: '16:00',
          estado: 'pendiente',
        },
        {
          id: 5,
          alimento: 'Parrillada',
          precio: 250,
          fecha: '2023-02-09',
          hora: '17:00',
          estado: 'pendiente',
        },
        {
          id: 6,
          alimento: 'Pasta',
          precio: 120,
          fecha: '2023-02-09',
          hora: '18:00',
          estado: 'pendiente',
        },
        {
          id: 7,
          alimento: 'Tacos',
          precio: 90,
          fecha: '2023-02-09',
          hora: '19:00',
          estado: 'pendiente',
        },
        {
          id: 8,
          alimento: 'Sopa',
          precio: 70,
          fecha: '2023-02-09',
          hora: '20:00',
          estado: 'pendiente',
        },
        {
          id: 9,
          alimento: 'Churrasco',
          precio: 180,
          fecha: '2023-02-09',
          hora: '21:00',
          estado: 'pendiente',
        },
        {
          id: 10,
          alimento: 'Empanadas',
          precio: 60,
          fecha: '2023-02-09',
          hora: '22:00',
          estado: 'pendiente',
        }
      ],
    };
  }

  cambiarEstadoPedido = (id, nuevoEstado) => {
    this.setState(prevState => ({
      pedidos: prevState.pedidos.map(pedido => {
        if (pedido.id === id) {
          axios.post('http://127.0.0.1:8000/endpoints/cambiarEstado', {id: id, estado: nuevoEstado}) // Aquí se realiza la llamada a axios
          .then(response => {
            console.log(response.data); // manejo de la respuesta 
          })
          .catch(error => {
            console.log(error); // manejo de errores 
          });
          return {
            ...pedido,
            estado: nuevoEstado
          };
        }
        return pedido;
      })
    }));
  }
  render() {
    return (
      <div>
        <header className="head1">
          <nav>
            <a href="/main">Inicio </a>
            <a href="/categorias">Categorías </a>
            <a href="/registro">Registro </a>
            <a href="/ordenes">Ordenes </a>
          </nav>
        </header>
        <h1>Lista de Pedidos</h1>
        <ul>
          {this.state.pedidos.map((pedido) => (
            <li key={pedido.id}>
              <p>Id: {pedido.id}</p>
              <p>Alimento: {pedido.alimento}</p>
              <p>Precio: {pedido.precio}</p>
              <p>Fecha: {pedido.fecha}</p>
              <p>Hora: {pedido.hora}</p>
              <p>Estado: {pedido.estado}</p>
              <button
                onClick={() => {  //Cambiar el estado del pedido al hacer click en el botón
                  this.cambiarEstadoPedido(pedido.id, 'En preparación');
                }}
              >
                Cambiar estado a "En preparación"
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Ordenes;