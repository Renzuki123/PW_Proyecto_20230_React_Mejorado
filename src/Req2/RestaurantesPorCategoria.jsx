import TopNav from '../Global/TopNav';
import { useEffect, useState } from 'react';


function RESTAURANTES(){
    const myStyle = {
        margin : "2.5%",
        height : "250px"
    }

    const [listaRESTAURANTES, setListaRESTAURANTES] = useState([])

    const obtenerRESTAURANTES = async function(){
        try{
            const response = await fetch("http://localhost:8000/endpoints/restaurantes")
            const data = await response.json()
            setListaRESTAURANTES(data.RESTAURANTES)
        }
        catch(error){
            console.error("Hubo un error obteniendo las RESTAURANTES")
        }
    }

    useEffect(function(){
        obtenerRESTAURANTES()
    }, [])

    let carrusel = []
    for(let i = 0; i < listaRESTAURANTES.length; i++){
        let articulo = listaRESTAURANTES[i]
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
        <center><h1>RESTAURANTES</h1></center>
        <div className='carrousel'>
            {carrusel}
            <p></p>
        </div>
    </div>
}

export default RESTAURANTES