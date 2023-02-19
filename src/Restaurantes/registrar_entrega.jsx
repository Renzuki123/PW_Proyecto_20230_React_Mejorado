import TopNav from "../Global/TopNav"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/*
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

*/

function Registrarentrega(){
  const [pedido, setPedido] = useState("")
  const [error, setError] = useState("")
  const FormRegistrar = function(){
    const [code, setCode] = useState('');
    const handleSubmit = async function(event){
      const body = {
        code : code
      }
      const response = await fetch('http://localhost:8000/endpoints/registrarentrega', {method : "POST",
      body : JSON.stringify(body)})

      const data = await response.json()
      if (data.error ==="") {
        setError(data.error)
        setPedido(data.producto)
      }
      else{
        setError(data.error)
      }
    }
     
    return <form>
      <label>Pin de pedido</label>
      <input type="text" id="code" value={code} onChange={(event) => setCode(event.target.value)}/>
      <button type="button" onClick={handleSubmit}>Buscar Pedido</button>
    </form>
  }
  const vacio = function(){
    console.log('Se hizo click')
    setPedido('')
    setError('')
    return <div>holla</div>
  }
  const Tabla = function(){
    if (error === "") {
      if (pedido!== "") {
        return <table>
        <tr>
          <th>Cod</th>
          <th>Detalle</th>
          <th>Pin de verificación</th>
        </tr>
        <tr>
          <th>{pedido.code}</th>
          <th>{pedido.desc}</th>
          <th>{pedido.code_v}</th>
          <th><button type="submit" onClick={vacio}>Confirmar la entrega</button></th>
        </tr>
      </table>
      }
    }
    else {
      return <h2>{error}</h2>
    }
  }
  return <div>
    <TopNav category={3}/>
    <br />
    <h1>Registrar una entrega de pedido</h1>
    <FormRegistrar/>
    <Tabla/>
  </div>
}

export default Registrarentrega