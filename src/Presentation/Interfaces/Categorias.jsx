import "./Categorias.css";
import React, { useState, useEffect } from "react";

function Categorias() {
  const [Pedido, setPedido] = useState([]);

  const peticionGet = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/endpoints/categorias");
      const data = await response.json();
      setPedido(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="cat">
      <header className="head1">
        <nav>
          <a href="/main">Inicio </a>
          <a href="/categorias"> Categorías </a>
          <a href="/registro"> Registro </a>
          <a href="/ordenes"> Ordenes </a>
        </nav>
      </header>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category</th>
            <th scope="col">Dish</th>
          </tr>
        </thead>
        <tbody>
          {Pedido.map((pedido) => {
            return (
              <tr key={pedido.id}>
                <td>{pedido.id}</td>
                <td>{pedido.category}</td>
                <td>{pedido.Dish}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Categorias;