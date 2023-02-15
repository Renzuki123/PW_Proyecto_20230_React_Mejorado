import TopNav from '../Global/TopNav';
import { useEffect, useState } from 'react';


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
        <h1>Recomendaciones</h1>
        <div className='carrousel'>
            {carrusel}
        </div>
    </div>
}

export default Recomendaciones