import React, { useState, useEffect }from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateArtDetail = () => {
    const navigate = useNavigate();

    // Récupérer les infos de l'art déjà
    const params = useParams();
    const { id } = params;
    const [article, setArticle] = useState([])
    useEffect( () => {

        const fetchArticles = async() => {
            try{
                const { data, status } = await axios.get(`http://localhost:8000/lv/articles/`+id);
                if (status === 200) setArticle(data);
            }
            catch(error){
                console.log(error.message)
            }
        }

        fetchArticles();

    }, [])

    // Initialisation de l'état pour les informations avec un objet contenant des valeurs vides
    const [articleModifie, setArticleModifie] = useState({
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
        period: '',
        description: ''
    })
    useEffect(() => {
        if (article) {
            setArticleModifie({
                picture: article.picture || { img: '', img1: '', img2: '', img3: '', img4: '' },
                name: article.name || '',
                price: article.price || '',
                brand: article.brand || '',
                material: article.material || '',
                color: article.color || '',
                period: article.period || '',
                description: article.description  || ''
            });
        }
    }, [article]);

    // Mettre à jour l'état 'article' lorsque l'admin saisit du texte dans les champs de formulaire
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name.startsWith("img")) {

        // Si c'est une image, on met à jour uniquement `picture`
            setArticleModifie(prevArt => ({
                ...prevArt,
                picture: {
                    ...prevArt.picture,
                    [name]: value
                }
        }));

        } else {
        // Sinon on met à jour les autres champs normalement
            setArticleModifie(prevArt => ({ ...prevArt, [name]: value }));
        }
    }

    // pour la soumission du formulaire
    const handleSubmit = async (event) => {

        event.preventDefault()

        try{
            const response = await axios.put('http://localhost:8000/lv/articles/'+id+'/update', articleModifie);
            alert("Article modifié");
        }
        catch(error){
            console.error('Error:', error);
        }

    }

    // Pour le retour en arrière
    const handleReturn = async (event) => {
        navigate('/dashboard');
    }

    // Pour la suppression
    const handleDelete = async(event) => {
        event.preventDefault()

        try{
            const result = await axios.delete('http://localhost:8000/lv/articles/'+id+'/delete');
            alert("L'article a été supprimé")
        }
        catch(error){
            console.error('Error: ', error)
        }

    }

  return (

    <>
    {/* <DashBoard/> */}

    <section id='dashboard-update-article'>

            <form onSubmit={handleSubmit}>

                <div className='dashboard-container'>
                    <img src={article.picture?.img}></img>

                    <div >
                        <h3>Infos générales</h3>

                        <div>
                            <label htmlFor='name'>Nom de l'article</label>
                            <input
                            type='text'
                            value={articleModifie.name}
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
                            value={articleModifie.price}
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
                            value={articleModifie.brand}
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
                            value={articleModifie.material}
                            placeholder="Matière"
                            onChange={handleChange}
                            ></input>
                        </div>

                        <div>
                            <label htmlFor='color'>Couleur (facultatif)</label>
                            <input
                            id='color'
                            value={articleModifie.color}
                            placeholder="Couleur"
                            name="color"
                            onChange={handleChange}
                            ></input>
                        </div>

                        <div>
                            <label htmlFor='period'>Période (facultatif)</label>
                            <input id='period'
                            placeholder="Période"
                            value={articleModifie.period}
                            name="period"
                            onChange={handleChange}
                            ></input>
                        </div>

                        <div>
                            <label htmlFor='description'>Description (facultatif)</label>
                            <textarea id='description'
                            style={{"resize":"none"}}
                            placeholder="Description"
                            value={articleModifie.description}
                            name="description"
                            onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>

                    <div >
                        <h3>Images</h3>

                        <div>
                            <label htmlFor='img'>Image principale</label>
                            <input
                            type='text'
                            value={articleModifie.picture?.img}
                            name='img'
                            id='img'
                            placeholder="URL de l'image principale"
                            required
                            onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor='img1'>Image supplémentaire 1</label>
                            <input type='text'
                            value={articleModifie.picture?.img1}
                            name='img1' id='img1' placeholder="URL de l'image 1" onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor='img2'>Image supplémentaire 2</label>
                            <input type='text' value={articleModifie.picture?.img2} name='img2' id='img2' placeholder="URL de l'image 2" onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor='img3'>Image supplémentaire 3</label>
                            <input type='text' value={articleModifie.picture?.img3} name='img3' id='img3' placeholder="URL de l'image 3" onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor='img4'>Image supplémentaire 4</label>
                            <input type='text' value={articleModifie.picture?.img4} name='img4' id='img4' placeholder="URL de l'image 4" onChange={handleChange} />
                        </div>

                        <div>
                            <label htmlFor='video'>Vidéo</label>
                            <input type='text' value={articleModifie.picture?.img4} name='video' id='video' placeholder="URL de la vidéo" onChange={handleChange} />
                        </div>

                    </div>
                </div>

                <div className="button-container">
                    <button type="submit" className='btn4'>Mettre à jour</button>
                    <button type="button" onClick={handleReturn} className='btn4'>Revenir en arrière</button>
                    <button type="button" onClick={handleDelete} className='btn4'>Supprimer l'article</button>
                </div>

            </form>

    </section>

    </>

  )
}

export default UpdateArtDetail