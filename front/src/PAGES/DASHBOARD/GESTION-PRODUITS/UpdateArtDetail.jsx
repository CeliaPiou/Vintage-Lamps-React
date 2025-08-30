import React, { useState, useEffect }from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AXIOS_INSTANCE from '../../../UTILS/services/AxiosInstance'

import AjouterCat from "../GESTION-CATEGORY/AjouterCat"
import { API_URL } from '../../../api'

const UpdateArtDetail = () => {
    const navigate = useNavigate();

    // poquito de style
    const red = {
        backgroundColor:  " rgba(253, 130, 130, 0.84)",
        color: "rgb(212, 0, 0)",
        border: "1px solid rgba(182, 0, 0, 0.81)",
        padding: "5px 10px",
        borderRadius: "20px",
        marginTop: "20px",
        marginBottom: "20px"
    }
    const green = {
        backgroundColor: " rgba(112, 192, 112, 0.56)",
        color: "green",
        border: "1px solid rgba(112, 192, 112, 0.75)",
        padding: "5px 10px",
        borderRadius: "20px",
        marginTop: "20px",
        marginBottom: "20px"
    }
    const greyish = {
        backgroundColor: " rgba(187, 187, 187, 0.15)",
        color: "rgba(87, 87, 87, 0.9)",
        border: "1px solid rgba(146, 146, 146, 0.47)",
        padding: "3px 10px",
        fontSize: "0.9rem",
        borderRadius: "20px"
    }


    // Récupérer les infos de l'art déjà
    const params = useParams();
    const { id } = params;
    const [article, setArticle] = useState([])
    useEffect( () => {

        const fetchArticles = async() => {
            try{
                const { data, status } = await AXIOS_INSTANCE.get(`${API_URL}/lv/articles/`+id);
                if (status === 200) setArticle(data);
            }
            catch(error){
                console.log(error.message)
            }
        }

        fetchArticles();

    }, [])

    // Charger les catégories existantes
    const [ categories, setCategories ] = useState([]);
    useEffect(() => {
        const fetchCat = async () => {
            try{
                const { data, status } = await AXIOS_INSTANCE(`${API_URL}/lv/category/all`)
                if(status === 200) {setCategories(data)}
            }
            catch(error) {
                console.log("Error: ", error.message)
            }
        };
        fetchCat();
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
        description: '',
        category: Array.isArray(article.category)
                ? article.category.map(cat => (typeof cat === 'string' ? cat : cat._id))
                : article.category? [article.category._id] : []

    })
    useEffect(() => {
        if (article) {

            const normalizedCategory = Array.isArray(article.category)
            ? article.category.map(cat => typeof cat === 'string' ? cat : cat._id)
            : article.category
                ? [article.category._id]
                : [];

            setArticleModifie({
                picture: article.picture || { img: '', img1: '', img2: '', img3: '', img4: '' },
                name: article.name || '',
                availability: article.availability || true,
                price: article.price || '',
                brand: article.brand || '',
                material: article.material || '',
                color: article.color || '',
                period: article.period || '',
                description: article.description  || '',
                category: normalizedCategory
            });
        }
    }, [article]);

    // Mettre à jour l'état 'article' lorsque l'admin saisit du texte dans les champs de formulaire
    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value)

        if (name.startsWith("img")) {

        // Si c'est une image, on met à jour uniquement `picture`
            setArticleModifie(prevArt => ({
                ...prevArt,
                picture: {
                    ...prevArt.picture,
                    [name]: value
                }
            }));

        }

        // Tentative si c'est une image on met à jour 'category'
        if (name === 'category') {
            const isChecked = event.target.checked;
            const catId = value;

            setArticleModifie(prevArt => {
                const alreadyThere = prevArt.category.includes(catId);
                let updatedCategories;

                if (isChecked && !alreadyThere) {
                    updatedCategories = [...prevArt.category, catId];
                } else if (!isChecked && alreadyThere) {
                    updatedCategories = prevArt.category.filter(c => c !== catId);
                } else {
                    updatedCategories = prevArt.category;
                }

                return {
                    ...prevArt,
                    category: updatedCategories
                };
            });
            return; // important pour ne pas continuer la suite du handleChange
        }


        else {
        // Sinon on met à jour les autres champs normalement
            setArticleModifie(prevArt => ({ ...prevArt, [name]: value }));
        }
    }

    // pour la soumission du formulaire
    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const response = await AXIOS_INSTANCE.put(`${API_URL}/lv/articles/${id}/update`, articleModifie);
            alert("Article modifié");
            navigate('/dashboard')
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
            const result = await AXIOS_INSTANCE.delete(`${API_URL}/lv/articles/${id}/delete`);
            alert("L'article a été supprimé")
        }
        catch(error){
            console.error('Error: ', error)
        }

    }

    // Pour les nouvelles cat
    const [addCat, setAddCat] = useState(false);
    const handleAddCat = async (event) => {
        setAddCat(true);
    }

    return (

    <>
    {addCat ? <AjouterCat addCat={addCat} setAddCat={setAddCat} /> : ""}
    {/* <DashBoard/> */}

    <section id='dashboard-update-article'>

            <form onSubmit={handleSubmit}>

                <div className='dashboard-container'>

                    {/* première div: img */}
                    <div className="half">
                        <img src={article.picture?.img}></img>
                    </div>

                    {/* Deuxième div, infos */}
                    <div className="half">
                        <div>
                            {/* {avail} */}
                            <div >
                                <legend htmlFor='availability'>
                                    {article.availability === true ?
                                    <>
                                        {/* <p style={green}>Article disponible</p> */}
                                        <select style={green} name="availability" id="availability" onChange={handleChange}>
                                            <option value={true}>Disponible</option>
                                            <option value={false}>Non disponible</option>
                                        </select>
                                    </>
                                    : article.availability === false ?
                                    <>
                                        {/* <p style={red} >Article non disponible</p> */}
                                        <select style={red} name="availability" id="availability" onChange={handleChange}>
                                            <option value={false}>Non disponible</option>
                                            <option value={true}>Disponible</option>
                                        </select>
                                    </>
                                    :
                                    ""
                                    }
                                </legend>
                            </div>
                            {/* Name */}
                            <div>
                                <label htmlFor='name'><strong style={{ fontSize: "1.2rem" }}>Nom de l'article</strong></label>
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
                            {/* Categorie */}
                            <div>
                                <div id='hover-to-make-appear'>
                                    <strong>Catégorie : </strong> {

                                        // Si il y'a une catégorie, et qu'il n'y en a qu'une
                                        article.category && article.category.length === 1 ?
                                            <>
                                            {article.category[0].name}
                                            </>

                                        // Si il y'a une catégorie et qu'il y'en a plusieurs
                                        : article.category && article.category.length > 1 ?
                                            article.category.map((cat, idx) => (
                                                <>
                                                    {cat.name} {idx < article.category.length - 1 ? ', ' : ''}
                                                </>
                                            ))

                                        : "Pas encore de catégorie"}
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="grey"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>

                                    {/* Toutes les catégories existantes */}
                                    <div id='reveal-categories' onChange={handleChange} >
                                        {categories.map(c => (
                                            <div>
                                                {/* <input name='category'
                                                    type='checkbox'
                                                    value={c._id}
                                                    onChange={handleChange}
                                                    id={c.name}
                                                    /> */}

<input
    name="category"
    type="checkbox"
    value={c._id}
    id={c.name}
    checked={articleModifie.category.includes(c._id)}
    onChange={handleChange}
/>

                                                <label htmlFor={c.name}>{c.name}</label>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                <p onClick={() => handleAddCat()} style={greyish}>+ Créer une catégorie</p>
                            </div>

                            <div className='souscat'>

                                <div >
                                    {/* Infos générales, prix marque matière culeur period */}
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


                                    {/* Description */}
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

                                {/* img */}
                                <div>
                                {/* Div images */}
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
                        </div>
                    </div>


                </div>

                {addCat? "" :
                    <div className="button-container">
                    <button type="submit" className='btn4'>Mettre à jour</button>
                    <button type="button" onClick={handleReturn} className='btn4'>Revenir en arrière</button>
                    <button type="button" onClick={handleDelete} className='btn4'>Supprimer l'article</button>
                </div>
                }


            </form>

    </section>

    </>

  )
}

export default UpdateArtDetail