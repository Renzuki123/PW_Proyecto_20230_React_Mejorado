import React, { useEffect, useState } from 'react';
import TopNav from '../Global/TopNav';

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
const Pedido = ({ pedido }) => {
    const [status] = useState(pedido.status);

    const estados = ["Pendiente", "En preparacion", "Terminado"]
  
    return (
          <tr>
              <td>{pedido.id}</td>
              <td>{pedido.nombre}</td>
              <td>{pedido.plato}</td>
              <td>{pedido.direccion}</td>
              <td>{pedido.estado}</td>
              <td>{pedido.codigo}</td>
          </tr>
    );
  };


function Estados(){
    const [listaPedidos, setListaPedidos] = useState([])
  
    const obtenerPedidos = async function(){
        try{
            const response = await fetch("http://localhost:8000/endpoints/verestado")
            const data = await response.json()
            console.log(data.arreglo);
            setListaPedidos(data.arreglo)
        }
        catch(error){
            console.error("Hubo un error obteniendo los pedidos")
        }
    }
  
    useEffect(function(){
        obtenerPedidos()
    }, [])
  
    let filas = []
    for(let i = 0; i < listaPedidos.length; i++){
        let pedido = listaPedidos[i]
        let elemento = <Pedido key={pedido.id} pedido={pedido} />
        filas.push(elemento)
    }
  
    return <div>
        <TopNav category ={4}/>
        <br />
        <center><h1>Estado del Pedido</h1></center>
        <table>
          <tr>
            <th><h3>ID</h3></th>
            <th><h3>Nombre</h3></th>
            <th><h3>Plato</h3></th>
            <th><h3>Direccion</h3></th>
            <th><h3>Estado</h3></th>
            <th><h3>Codigo</h3></th>
          </tr>
          {filas}
        </table>
    </div>
}

export default Estados;