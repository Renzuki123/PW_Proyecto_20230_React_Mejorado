import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './restaurant.css'

function RegisterOrderForm(props) {
  const total = sessionStorage.getItem("total");
  //const total = props.location && props.location.state ? props.location.state.total : 0;
  //const total = props.location.state.total;
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [detalles, setDetalles] = useState("");
  const [metodo, setMetodo] = useState("");
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    const pedido = {
      nombre: nombre,
      direccion: direccion,
      detalles: detalles,
      metodo: metodo,
      total: total,
    };
    const response = await fetch("http://localhost:8000/endpoints/registrar_pedido", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pedido)
    });
    const data = await response.json();
    console.log(data.message); // o data.error si ocurre un error
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <center><h1>Registrar Pedido</h1></center>
      </div>
      <div className="caja">
        <div>
          <label htmlFor="names">Nombres__:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
      </div>

      <div className="caja">
        <div>
          <label htmlFor="address">Dirección_:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(event) => setDireccion(event.target.value)}
          />
        </div>
      
        <div>
          <label htmlFor="addressDetails">Detalles__:</label>
          <input
            type="text"
            id="detalles"
            value={detalles}
            onChange={(event) => setDetalles(event.target.value)}
          />
        </div>
      </div>


      <div className="caja">
        <label htmlFor="paymentMethod">Método de pago:</label>
        <select
          id="metodo"
          value={metodo}
          onChange={(event) => setMetodo(event.target.value)}
        >
          <option value="">Seleccione un método de pago</option>
          <option value="cash">Efectivo</option>
          <option value="card">Tarjeta</option>
        </select>
      </div>

      <center><div className="boton_registrar">
          <button type="submit">Registrar pedido</button>
      </div></center>
    </form>
  );
}

export default RegisterOrderForm;