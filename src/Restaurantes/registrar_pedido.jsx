import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './restaurant.css'

function RegisterOrderForm() {
  const [names, setNames] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // aquí iría la lógica para enviar la información a la API o procesarla de alguna otra manera
    console.log(`Dirección: ${address}`);
    console.log(`Detalles de la dirección: ${addressDetails}`);
    console.log(`Método de pago: ${paymentMethod}`);
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
            id="names"
            value={names}
            onChange={(event) => setNames(event.target.value)}
          />
        </div>
      </div>

      <div className="caja">
        <div>
          <label htmlFor="address">Dirección_:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
      
        <div>
          <label htmlFor="addressDetails">Detalles__:</label>
          <input
            type="text"
            id="addressDetails"
            value={addressDetails}
            onChange={(event) => setAddressDetails(event.target.value)}
          />
        </div>
      </div>


      <div className="caja">
        <label htmlFor="paymentMethod">Método de pago:</label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={(event) => setPaymentMethod(event.target.value)}
        >
          <option value="">Seleccione un método de pago</option>
          <option value="cash">Efectivo</option>
          <option value="card">Tarjeta</option>
        </select>
      </div>

      <center><div className="boton_registrar">
        <Link to = "/Restaurantes/estado_pedido">
          <button type="submit">Registrar pedido</button>
        </Link>
      </div></center>
    </form>
  );
}

export default RegisterOrderForm;