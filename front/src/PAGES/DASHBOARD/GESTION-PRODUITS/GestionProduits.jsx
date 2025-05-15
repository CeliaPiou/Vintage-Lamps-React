import React, { useState, useEffect }from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddProduct from './AddProduct';
import UpdateArticle from './UpdateArticle';


const GestionProduits = () => {


    // Chercher le contenu first:
    const [articles, setArticles] = useState([])
    useEffect(() => {

        const fetchArticles = async () => {

            try{
                const { data, status } = await axios.get('http://localhost:8000/lv/articles/all')

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


    // Gestion de la page
    const [addArticle, setAddArticle] = useState(false);
    const [updateArt, setUpdateArt] = useState(false);

    const handleClickAddArticle = () => {
        setAddArticle(true)
    }

    const handleClickUpdateArticle = () => {
        setUpdateArt(true)
    }


    return (
    <>

        <h1>Gestion des articles</h1>

        <div className='container-dashboard'>

            {addArticle ?
                <AddProduct />
                : updateArt ?
                <UpdateArticle />
                :
                <>
                <article className='article-dashboard'>
                    <h2>Ajouter une nouvelle lampe</h2>
                    <button onClick={handleClickAddArticle} className='btn4'>+</button>
                </article>

                <article className='article-dashboard'>
                    <h2>Modifier et/ou supprimer</h2>

                    <div>
                        {articles
                        .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .slice(0,3)
                        .map(art => (
                            <Link to={{pathname: `/dashboard/update/${art._id}`}}>
                            <div key={art._id} className='dashboard-card'>
                                <span>{art.name}</span>
                                <img src={art.picture.img} alt={art.name}></img>
                            </div>
                            </Link>
                        ))}
                    </div>

                    <button onClick={handleClickUpdateArticle} className='btn4'>Voir le reste</button>
                </article>

            </>}

        </div>

    </>
    )
}

export default GestionProduits