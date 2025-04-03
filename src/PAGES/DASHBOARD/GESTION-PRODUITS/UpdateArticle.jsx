import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const UpdateArticle = () => {

    // Récupérer les infos
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const fetchArticles = async () => {

            try{
                const { data, status } = await axios.get('http://localhost:8000/lv/articles/new');
                if(status === 200) {
                    setArticles(data)
                    console.log(data)
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

            <Link to={{ pathname: `/dashboard/update/${art._id}`}}>
                <div
                    key={art._id}
                    className='card'>
                    <img src={art.picture.img} alt={art.name} height={250}></img>
                    {art.name}
                </div>
            </Link>
        ))}

        </section>
    )
}

export default UpdateArticle