//Me devolvera todo el arreglo de objetos que tengo en data
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const ArticleList = ({ articles }) => {
    return (
        <div className="article-list">
            {articles.map(article => (
                <div className="article-container" key={article.id}>
                    <div className="img-container">
                        <Link to="/Req4">
                            <img src={article.url} alt={article.title} />
                        </Link>
                    </div>
                    <div className="article-body">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <div className="article-footer">
                            <span>{article.date} · {article.category} </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};
export default ArticleList;