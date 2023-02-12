import React, { useState } from 'react';
import "./Ordenes.css"


function Order({ order }) {
    //La función Order tiene un parámetro order 
//que representa cada orden en el arreglo orders. 
//Esto permite que cada componente Order tenga acceso a la información de
 //cada orden individualmente en el arreglo, como el ID y el estado, para mostrar y 
 //actualizar la información en el componente.

  const [status, setStatus] = useState(order.status || 'Sin estado');
  //Esta forma de utilizar el useState es de React Hooks y es
  // una forma de crear y mantener el estado de un componente de React.

  //Básicamentese utiliza para inicializar el valor inicial de status, utilizando
  // el valor order.status si existe o, en caso contrario, utilizando el valor por defecto 'Sin estado'.


  const handleStatusChangeToPreparation = () => {
    // Esta función la utilicé para manejar un evento de clic en un botón. 
  //La función se invoca al hacer clic en el botón y su objetivo es cambiar el estado actual del 
  //componente a "En preparación"


    setStatus('En preparación');
     //Luego con "setStatus", para cambiar el estado, 
   //y este método es proporcionado por la función "useState".
  };
  const handleStatusChangeToFinished = () => {
    setStatus('Finalizado');
  }; 
  //Igualmente se aplica aquí
  

  return (
    
    
    <div>
        
      <p>ID de la orden: {order.id}</p>
      <p>Estado actual: {status}</p>
      {status === 'Sin estado' && (
        <button onClick={handleStatusChangeToPreparation}>
          Cambiar a En preparación</button>
      )}
      {status === 'En preparación' && (
        <button onClick={handleStatusChangeToFinished}>
          Cambiar a Finalizado
        </button>
      )}
    </div>
  );
}

function App() {
  const orders = [
//Acá se definió una constante llamada "orders" que
// es un array de objetos, cada objeto tiene su respectivo "id" y su "status"
    { id: 1, status: 'Sin estado' },
    { id: 2, status: 'Sin estado' },
    { id: 3, status: 'Sin estado' },
    { id: 4, status: 'Sin estado' },
    { id: 5, status: 'Sin estado' },
    { id: 6, status: 'Sin estado' },
    { id: 7, status: 'Sin estado' },
    { id: 8, status: 'Sin estado' },
    { id: 9, status: 'Sin estado' },
  ];

  return (
    <div>{/** "map" para iterar sobre cada objeto en el array "orders". */}
      {orders.map((order) => (
        //Se está creando un componente "Order" y pasándole una propiedad "key" y "order".
        //Con esto para identificar cada orden de manera individual y poder cambiar el estado
        
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
}

export default App;
