import React, { useState, useEffect }from 'react'
import AddProduct from './AddProduct';
import axios from 'axios';


const GestionProduits = () => {


    // Chercher le contenu first:

    const [articles, setArticles] = useState([])

    useEffect(() => {

        const fetchArticles = async () => {

            try{
                const { data, status } = await axios.get('http://localhost:8080/lv/articles/all')

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

    const handleClickAddArticle = () => {
        setAddArticle(true)
    }

  return (
    <>

        <h1>Gestion des articles</h1>

        <div className='container-dashboard'>

            {addArticle ?
                <AddProduct />
                :
                <>
                <article className='article-dashboard'>
                    <h2>Ajouter une nouvelle lampe</h2>
                    <button onClick={handleClickAddArticle} className='btn4'>+</button>
                </article>

                <article className='article-dashboard'>
                    <h2>Modifier une lampe</h2>

                    {articles.map(art => (
                        <div>{art.name}</div>
                    ))}

                    <button className='btn4'>Voir le reste</button>
                </article>

                <article className='article-dashboard'>
                    <h2>Supprimer une lampe</h2>
                    <img src='#'></img>
                    <button className='btn4'>Ajouter</button>

                    <img src='#'></img>
                    <button className='btn4'>Ajouter</button>

                    <img src='#'></img>
                    <button className='btn4'>Ajouter</button>

                    <button className='btn4'>Voir le reste</button>
                </article>
            </>}

        </div>

    </>
  )
}

export default GestionProduits