import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Data(props){

	const navigate = useNavigate()
	const [listaRestaurantes, setListaRestaurantes] = useState([])

	const data = async () => {
		try {
			const response = await fetch("http://localhost:8000/clientes/restaurante/listar")
			const data = await response.json()
			setListaRestaurantes(data.restaurantes)
		} catch (error) {
			console.error("Error obteniendo restaurantes")
		}
	}
}