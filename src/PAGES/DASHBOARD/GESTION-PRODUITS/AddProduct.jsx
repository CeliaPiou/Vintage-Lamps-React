import React, { useState }from 'react'
import axios from 'axios'


const AddProduct = () => {

    // Initialisation de l'état pour les informations avec un objet contenant des valeurs vides
    const [article, setArticle] = useState({
        picture: {
            img: '',
            img1: '',
            img2: '',
            img3: '',
            img4: '',
            video: ''
        },
        name: '',
        price: '',
        brand: '',
        material: '',
        color: '',
        period: ''
    })

    // Mettre à jour l'état 'article' lorsque l'admin saisit du texte dans les champs de formulaire
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name.startsWith("img")) {

        // Si c'est une image, on met à jour uniquement `picture`
            setArticle(prevArt => ({
                ...prevArt,
                picture: {
                    ...prevArt.picture,
                    [name]: value
                }
        }));

        } else {
        // Sinon on met à jour les autres champs normalement
            setArticle(prevArt => ({ ...prevArt, [name]: value }));
        }
    }

    // pour la soumission du formulaire
    const handleSubmit = async (event) => {

        event.preventDefault()
        console.log('Article bien récupéré :', article);

        try{
            const response = await axios.post('http://localhost:8000/lv/articles/add', article);
            alert("Article ajouté");
        }
        catch(error){
            console.error('Error:', error);
        }

    }

    // Pour le retour en arrière
    const handleReturn = async (event) => {
        window.location.reload(false);
    }


    return (

        <>

            <article className='article-dashboard-zoom'>

                <form onSubmit={handleSubmit}>

                    <div id="container-form-dashboard">
                        <div id="form-dashboard-infos">
                            <h3>Infos générales</h3>

                            <div>
                                <label htmlFor='name'>Nom de l'article</label>
                                <input
                                type='text'
                                id='name'
                                name="name"
                                required
                                placeholder="Nom de l'article"
                                onChange={handleChange}
                                ></input>
                            </div>

                            <div>
                                <label htmlFor='price'>Prix de l'article</label>
                                <input
                                id='price'
                                required
                                name="price"
                                placeholder="Prix"
                                onChange={handleChange}
                                ></input>
                            </div>

                            <div>
                                <label htmlFor='brand'>Marque  (facultatif)</label>
                                <input
                                id='brand'
                                placeholder="Marque"
                                name="brand"
                                onChange={handleChange}
                                ></input>
                            </div>

                            <div>
                                <label htmlFor='material'>Matière (facultatif)</label>
                                <input
                                id='material'
                                name="material"
                                placeholder="Matière"
                                onChange={handleChange}
                                ></input>
                            </div>

                            <div>
                                <label htmlFor='color'>Couleur (facultatif)</label>
                                <input
                                id='color'
                                placeholder="Couleur"
                                name="color"
                                onChange={handleChange}
                                ></input>
                            </div>

                            <div>
                                <label htmlFor='period'>Période (facultatif)</label>
                                <input id='period'
                                placeholder="Période"
                                name="period"
                                onChange={handleChange}
                                ></input>
                            </div>
                        </div>

                        <div id="form-dashboard-img">
                            <h3>Images</h3>

                            <div>
                                <label htmlFor='img'>Image principale</label>
                                <input
                                type='text'
                                name='img'
                                id='img'
                                placeholder="URL de l'image principale"
                                required
                                onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor='img1'>Image supplémentaire 1</label>
                                <input type='text' name='img1' id='img1' placeholder="URL de l'image 1" onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor='img2'>Image supplémentaire 2</label>
                                <input type='text' name='img2' id='img2' placeholder="URL de l'image 2" onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor='img3'>Image supplémentaire 3</label>
                                <input type='text' name='img3' id='img3' placeholder="URL de l'image 3" onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor='img4'>Image supplémentaire 4</label>
                                <input type='text' name='img4' id='img4' placeholder="URL de l'image 4" onChange={handleChange} />
                            </div>

                            <div>
                                <label htmlFor='video'>Vidéo</label>
                                <input type='text' name='video' id='video' placeholder="URL de la vidéo" onChange={handleChange} />
                            </div>

                        </div>
                    </div>

                    <div className="button-container">
                        <button className='btn4'>Ajouter</button>
                        <button onClick={handleReturn} className='btn4'>Revenir en arrière</button>
                    </div>

                </form>


            </article>

        </>

    )
}

export default AddProduct