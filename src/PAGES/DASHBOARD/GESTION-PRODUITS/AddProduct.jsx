import React from 'react'

const AddProduct = () => {
  return (
    <>


    <article className='article-dashboard-zoom'>
                    <h2>Ajouter une nouvelle lampe</h2>
                    <form>
                        <div>
                            <label htmlFor='name'>Nom de l'article</label>
                            <input id='name' required placeholder="Nom de l'article"></input>
                        </div>

                        <div>
                            <label htmlFor=''>Prix de l'article</label>
                            <input id='' required placeholder="Prix"></input>
                        </div>

                        <div>
                            <label htmlFor='brand'>Marque  (facultatif)</label>
                            <input id='brand' placeholder="Marque"></input>
                        </div>

                        <div>
                            <label htmlFor='material'>Matière (facultatif)</label>
                            <input id='material' placeholder="Matière"></input>
                        </div>

                        <div>
                            <label htmlFor='color'>Couleur (facultatif)</label>
                            <input id='color' placeholder="Couleur"></input>
                        </div>

                        <div>
                            <label htmlFor='period'>Période (facultatif)</label>
                            <input id='period' placeholder="Période"></input>
                        </div>



                    </form>
                    <button className='btn4'>Ajouter</button>
                </article>

    </>
  )
}

export default AddProduct