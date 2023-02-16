import "./Categorias.css"
import axios from "axios"
import React, {useState} from "react";
import { useEffect } from "react";

function Categorias(){

  const[Pedido,setPedido]= useState([]); //Variable de estado para traer del backend los datos
  
  const peticionGet =async()=>{
    await axios.get("http://127.0.0.1:8000/endpoints/categorias") //petición GET a  API utilizando la biblioteca Axios

    //La petición GET se realiza a la URL http://127.0.0.1:8000/endpoints/categorias y utiliza el método get de Axios. 
    //Cuando se completa la petición, la función then se ejecuta con la respuesta de la API, que 
    //se establece como el nuevo valor del estado de Pedido utilizando la función setPedido.
    .then(response=>{
      setPedido(response.data)
      
      
      //Luego Si hay algún error en la petición, la función catch se ejecuta y registra el error en la consola.
    }).catch(error=>{
      console.log(error)
    })
  }
  // Luego implementé el hook useEffect para llamar a la función peticionGet cuando el componente se
  // monta por primera vez, pasando un arreglo vacío como dependencia para asegurarse
   // de que solo se llama una vez. Esto carga los datos de la API y actualiza el estado de Pedido con ellos.
  useEffect(()=>{
    peticionGet();
  },[])
  
  return (

        <div class="cat">

            <header className="head1">
            
              <nav>
              
                <a href="/main" >Inicio </a>
                <a href="/categorias"> Categorías  </a>
                <a href="/registro"> Registro </a>
                <a href="/ordenes"> Ordenes </a>
              
              </nav>
           
            </header>

        <table class="table" >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category</th> 
              <th scope="col">Dish</th>
            
            </tr>
          </thead>
          <tbody>
            {Pedido.map((pedido)=>{
              return(           
            <tr key={pedido.id}>
              <td>{pedido.id}</td>
              <td>{pedido.category}</td>
              <td>{pedido.Dish}</td>
           
            </tr>)})}
           
          </tbody>
        </table>
      </div>
  )
}

export default Categorias