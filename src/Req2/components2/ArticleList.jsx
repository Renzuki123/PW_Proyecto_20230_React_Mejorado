//Me devolvera todo el arreglo de objetos que tengo en data

export const ArticleList = ({ articles }) => {
	return (
        <div className="article-list">
            {articles.map(article => (
                <div className="article-container" key={article.id}>
                    <div className="img-container">
                        <img src={article.image} alt={article.title} />
                    </div>
                    <div className="article-body">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <div className="article-footer">
                            <span>{article.date} · </span>
                            <span>{article.Puntuacion}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};
export default ArticleList;