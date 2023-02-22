import TopNav from '../Global/TopNav';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Recomendaciones = () => {
  const [recomendaciones, setRecomendaciones] = useState([]);
  const myStyle = {
    margin : "2.5%",
    height : "250px",
    width: "600px"
  }

  const obtenerRecomendaciones = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/endpoints/recomendaciones`);
      setRecomendaciones(response.data.recomendaciones);
    } catch (error) {
      console.error("Hubo un error obteniendo las recomendaciones");
    }
  }

  useEffect(() => {
    obtenerRecomendaciones();
  }, []);

  let carrusel = []
  for(let i = 0; i < recomendaciones.length; i++){
      let articulo = recomendaciones[i]
      let elemento = <article className='card' key={articulo.id}>
          <img src={articulo.imagen} alt="imagen" style={myStyle}/>
          <p style={{textAlign: "center", width: "100%", color: "black"}}>{articulo.texto}</p>
          <button type='button' className='btn btn-outline-light'>Más info</button>
          <br />
      </article>
      carrusel.push(elemento)
  }

  return (
    <div>
      <TopNav category={4} />
      <br />
      <center><h1>Recomendaciones</h1></center>
      <div className="carrousel">
        {recomendaciones.length > 0 ? (
          recomendaciones.map((recomendacion) => (
            <article className='card' key={recomendacion.id}>
              <img src={recomendacion.imagen} alt="imagen" style={myStyle} />
              <p style={{ textAlign: "center", width: "100%", color: "black" }}>{recomendacion.descripcion}</p>
              <button type='button' className='btn btn-outline-light'>Más info</button>
              <br />
            </article>
          ))
        ) : (
          <p>No se encontraron recomendaciones</p>
        )}
      </div>
    </div>
  );
}

export default Recomendaciones;

/*
function Recomendaciones(){
    const myStyle = {
        margin : "2.5%",
        height : "250px"
    }

    const [listaRecomendaciones, setListaRecomendaciones] = useState([])

    const obtenerRecomendaciones = async function(){
        try{
            const response = await fetch("http://localhost:8000/endpoints/recomendaciones")
            const data = await response.json()
            setListaRecomendaciones(data.recomendaciones)
        }
        catch(error){
            console.error("Hubo un error obteniendo las recomendaciones")
        }
    }

    useEffect(function(){
        obtenerRecomendaciones()
    }, [])

    let carrusel = []
    for(let i = 0; i < listaRecomendaciones.length; i++){
        let articulo = listaRecomendaciones[i]
        let elemento = <article className='card'>
                <img src={articulo.imagen} alt="imagen" style={myStyle}/>
                <p style={{textAlign: "center", width: "100%", color: "black"}}>{articulo.texto}</p>
            <button type='button' className='btn btn-outline-light'>Más info</button>
            <br />
            </article>
        carrusel.push(elemento)
    }

    return <div>
        <TopNav category ={4}/>
        <br />
        <center><h1>Recomendaciones</h1></center>
        <div className='carrousel'>
            {carrusel}
            <p>gee</p>
        </div>
    </div>
}

export default Recomendaciones
*/