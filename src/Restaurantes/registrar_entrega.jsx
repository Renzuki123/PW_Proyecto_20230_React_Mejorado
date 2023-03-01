/*
import TopNav from "../Global/TopNav"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <input type="text" id="id" value={code} onChange={(event) => setCode(event.target.value)}/>
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
            <th>ID</th>
            <th>Nombre</th>
            <th>Detalles</th>
            <th>Dirección</th>
            <th>Método</th>
            <th>Código</th>
            <th>Estado</th>
            <th>Total</th>
            <th>Confirmar la entrega</th>
          </tr>
          <tr>
            <td>{pedido.id}</td>
            <td>{pedido.nombre}</td>
            <td>{pedido.detalles}</td>
            <td>{pedido.direccion}</td>
            <td>{pedido.metodo}</td>
            <td>{pedido.codigo}</td>
            <td>{pedido.estado}</td>
            <td>{pedido.total}</td>
            <td><button type="button" onClick={vacio}>Confirmar la entrega</button></td>
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

*/

import TopNav from "../Global/TopNav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registrarentrega() {
  const [pedido, setPedido] = useState("");
  const [error, setError] = useState("");

  const FormRegistrar = function () {
    const [code, setCode] = useState("");

    const handleSubmit = async function (event) {
      const body = {
        code: code,
      };
      const response = await fetch(
        "http://localhost:8000/endpoints/registrarentrega",
        {
          method: "POST",
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();
      if (data.error === "") {
        setError(data.error);
        setPedido(data.producto);
      } else {
        setError(data.error);
      }
    };

    return (
      <form>
        <label>Pin de pedido</label>
        <input
          type="text"
          id="id"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Buscar Pedido
        </button>
      </form>
    );
  };

  const vacio = function () {
    console.log("Se hizo click");
    setPedido("");
    setError("");
    return <div>holla</div>;
  };

  const Tabla = function () {
    if (error === "") {
      if (pedido !== "") {
        return (
          <table>
            <tbody>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Detalles</th>
              <th>Dirección</th>
              <th>Método</th>
              <th>Código</th>
              <th>Estado</th>
              <th>Total</th>
              <th></th>
            </tr>
            <tr>
            <td>{pedido.id}</td>
            <td>{pedido.nombre}</td>
            <td>{pedido.detalles}</td>
            <td>{pedido.direccion}</td>
            <td>{pedido.metodo}</td>
            <td>{pedido.codigo}</td>
            <td>{pedido.estado}</td>
            <td>{pedido.total}</td>
              <td>
                <button onClick={cambiarEstadoPedido(pedido.id, 'E')}>Confirmar Entrega</button>
              </td>
            </tr>
          </tbody>
          </table>
        );
      } else {
        return <div>No hay pedidos seleccionados</div>;
      }
    } else {
      return <div>{error}</div>;
    }
  };

  const navigate = useNavigate();

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
      setPedido(pedido.map(pedido => {
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
      <TopNav />
      <h1>Registrar Entrega</h1>
      <FormRegistrar />
      <Tabla />
    </div>
  );
}

export default Registrarentrega;