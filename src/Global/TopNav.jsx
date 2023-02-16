import { Link } from "react-router-dom"

function Elemento(props){
    if(props.current === true){
        /*return <a href={props.enlace} className="current col">{props.texto}</a>*/
        return <Link to={props.enlace} className="current col">{props.texto}</Link>
    }
    else{
        /*return <a href={props.enlace} className="col">{props.texto}</a>*/
        return <Link to={props.enlace}  className="col">{props.texto}</Link>
    }
}

function TopNav(props){
    const enlaces = ["/", "/Login", "/Login", "/req2", "/recomendaciones/Recomendaciones", "/Restaurantes/estado_pedido"]
    const textos = ["Inicio", "Register", "Login", "Restaurantes", "Recomendaciones", "Ver Pedidos"]
    const barra = []

    for (let i = 0; i < 6; i++){
        if(i === props.category){
            barra.push(<Elemento current = {true} enlace={enlaces[i]} texto={textos[i]}/>)
        }
        else{
            barra.push(<Elemento current = {false} enlace={enlaces[i]} texto={textos[i]}/>)
        }
    }

    return <div className="topnav">
        <div className="row">
            {barra}
        </div>
    </div>
}

export default TopNav