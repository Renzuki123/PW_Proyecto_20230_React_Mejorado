import React, { useState } from 'react';

const DeliveryTable = () => {
    const [deliveries, setDeliveries] = useState([
      { id: 1, verificationCode: '123456', status: 'En Preparación' },
      { id: 2, verificationCode: 'abcdef', status: 'En Preparación' },
    ]);
  
    const [inputValues, setInputValues] = useState({});
  
    const handleChangeStatus = (id) => {
      const updatedDeliveries = deliveries.map((delivery) => {
        if (delivery.id === id) {
          delivery.status = delivery.status === 'En Preparación' ? 'Completado' : 'En Preparación';
        }
        return delivery;
      });
      setDeliveries(updatedDeliveries);
    };
  
    const handleInputChange = (event, id) => {
      setInputValues({
        ...inputValues,
        [id]: event.target.value,
      });
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Código de Verificación</th>
            <th>Estado del Pedido</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id}>
              <td>{delivery.id}</td>
              <td>
                <input
                  type="text"
                  value={inputValues[delivery.id] || ''}
                  onChange={(event) => handleInputChange(event, delivery.id)}
                />
              </td>
              <td>
                <input type="text" value={delivery.status} disabled />
                <button onClick={() => handleChangeStatus(delivery.id)}>
                  Cambiar estado
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default DeliveryTable;