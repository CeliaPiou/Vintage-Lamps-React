import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UpdateArticle = () => {

    // Récupérer les infos
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const fetchArticles = async () => {

            try{
                const { data, status } = await axios.get('http://localhost:8080/lv/articles/all');
                if(status === 200) {
                    setArticles(data)
                }
            }
            catch(error){
                console.log(error.message)
            }

        }

        fetchArticles();

    }, [])



    return (
        <section className='dashboard-all-articles-container'>

        {articles.map(art => (
            <div
                key={art._id}
                className='dashboard-all-article-block'>
                <img src={art.picture.img} alt={art.name} width={200}></img>
                {art.name}
            </div>
        ))}

        </section>
    )
}

export default UpdateArticle