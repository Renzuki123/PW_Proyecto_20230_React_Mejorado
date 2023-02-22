/*El siguiente req se hizo con el apoyo de este video de YT: https://youtu.be/JY7eV4VMeV0*/
import './Req3.css'
import data from './data.js';
import ArticleList from './ArticleList';
import ButtonList from './ButtonList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Req3 = () => {

    //En data cada objeto tiene su categoria, asi que la iteraremos con Math y guardaremos la categoría en un arreglo
    const allCategories = ['All', ...new Set(data.map(article => article.category))]

    //Usaremos 2 estados en esta aplicacion
    const [categories, setcategories] = useState(allCategories)
    const [articles, setArticles] = useState(data)

    const filterCategory = (category) => {
        if (category === 'All') {
            setArticles(data)
            return
        }
        //Filtra todo lo que es article.category de la categoria elegida por el usuario
        const filteredData = data.filter(article => article.category === category);
        setArticles(filteredData)
    }



    return (
        <>
            <ButtonList categories={categories} filterCategory={filterCategory} />
            <ArticleList articles={articles} />
        </>
    );
};
export default Req3;