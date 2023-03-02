/*El siguiente req se hizo con el apoyo de este video de YT: https://youtu.be/JY7eV4VMeV0*/
import './Req4.css'
import ArticleList from './ArticleList';
import ButtonList from './ButtonList';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom"

const Req4 = () => {
    const [data, setListaRestaurantes] = useState([])
    console.log("Esto es data:" + data)

    const ObtenerRestaurantesAsyncAwait = async () => {
        try {
            const response = await fetch("http://localhost:8000/endpoints/plato/listar")
            const content = await response.json()
            console.log("Esto es content:")
            setListaRestaurantes(content.data)
        } catch (error) {
            console.error("Error obteniendo restaurantes")
        }
    }
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(function() {
        ObtenerRestaurantesAsyncAwait()
    }, [])

    //En data cada objeto tiene su categoria, asi que la iteraremos con Math y guardaremos la categoría en un arreglo
    const allCategories = ['All', ...new Set(data.map(article => article.category))]
    console.log("Prueba AllCategories " + allCategories)

    //Usaremos 2 estados en esta aplicacion
    const [categories, setcategories] = useState(allCategories)
    const [articles, setArticles] = useState(data)

    const filterCategory = (category) => {
        if (category === 'All') {
            setArticles(data)
            return
        }
        //Filtra todo lo que es article.category de la categoria elegida por el usuario
        //No esta entrando
        const filteredData = data.filter(article => article.category === category);
        setArticles(filteredData)
    }
    return (
        <>
            <ButtonList categories={allCategories} filterCategory={filterCategory} />
            <ArticleList articles={articles} />
        </>
    );
};
export default Req4;