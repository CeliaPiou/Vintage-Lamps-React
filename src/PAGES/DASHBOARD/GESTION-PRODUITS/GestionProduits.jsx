import React, { useState }from 'react'
import AddProduct from './AddProduct';

const GestionProduits = () => {

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
                    <img src='#'></img>
                    <button className='btn4'>Ajouter</button>

                    <img src='#'></img>
                    <button className='btn4'>Ajouter</button>

                    <img src='#'></img>
                    <button className='btn4'>Ajouter</button>

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