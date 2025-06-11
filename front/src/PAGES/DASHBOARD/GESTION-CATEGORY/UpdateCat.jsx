import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import AXIOS_INSTANCE from '../../../UTILS/services/AxiosInstance'



const UpdateCat = () => {

    const params = useParams();
    const { id } = params;
    const [ cat, setCat ] = useState([]);
    const [ catModifie, setCatModifie ] = useState({
        name: cat.name,
        image: cat.image,
        visible : cat.visible
    });

    // Les styles
    const red = {
        backgroundColor:  " rgba(253, 130, 130, 0.84)",
        color: "rgb(212, 0, 0)",
        border: "1px solid rgba(182, 0, 0, 0.81)",
        padding: "1px 6px",
        borderRadius: "20px"
    }
    const green = {
        backgroundColor: " rgba(112, 192, 112, 0.56)",
        color: "green",
        border: "1px solid rgba(112, 192, 112, 0.75)",
        padding: "1px 6px",
        borderRadius: "20px"
    }
    const greyish = {
        backgroundColor: " rgba(187, 187, 187, 0.15)",
        color: "rgba(87, 87, 87, 0.9)",
        border: "1px solid rgba(146, 146, 146, 0.47)",
        padding: "10px 10px",
        borderRadius: "20px"
    }


    // Charger la catégorie
    useEffect(() => {

        const fetchCat = async () => {
            try {
                const { status, data } = await AXIOS_INSTANCE.get('http://localhost:8000/lv/category/'+id)
                if (status === 200) {
                    setCat(data)
                }
            }
            catch(error) {
                console.log("Erreur de fetch, ", error.message)
            }
        }

        fetchCat();

    }, [])

    // Handlesubmit
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await AXIOS_INSTANCE.put('http://localhost:8000/lv/category/update/'+id, catModifie)
            alert("Catégorie modifiée !", catModifie);
            navigate('/dashboard')
        }
        catch(error) {
            console.log("Erreur pour le submit, ", error.message)
        }
    }

    // Handlechange
    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(name, " : ", value)
        setCatModifie((prev) => ({
            ...prev, [name]: value
        }))
    }

    // HandleDelete
    const navigate = useNavigate();
    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            const response = await AXIOS_INSTANCE.delete('http://localhost:8000/lv/category/delete/'+id);
            alert("Catégorie '"+ cat.name +"' supprimée");
            navigate('/dashboard');
        }
        catch(error) {
            console.log("Erreur pour la suppression de la catégorie, ", error.message)
        }
    }


    return (
        <section id='update-one-category'>

            <section>

                <img src={cat.image} alt=""></img>
                <strong>{cat.name}</strong>

            </section>

            <form onSubmit={handleSubmit}>

                <div id='one'>
                    <label htmlFor='name'>Modifier le nom : </label>
                    <input
                        type='text'
                        id='name'
                        name="name"
                        placeholder="Nom de la catégorie"
                        onChange={handleChange}
                    ></input>

                    <label htmlFor='image'>Modifier l'image : </label>
                    <input
                        type='text'
                        id='image'
                        name="image"
                        placeholder="URL de l'image"
                        onChange={handleChange}
                    ></input>
                </div>

                <div id="two">
                    Actuellement, cette catégorie est : { cat.visible == true ?
                    <>
                        <p style={green}>Visible</p>
                        <select style={greyish} name="visible" id="visible" onChange={handleChange}>
                            <option  value={true}>Modifier la visibilité...</option>
                            <option  value={false}>Rendre non visible pour les visiteurs</option>
                        </select>
                    </>
                    :
                    <>
                        <p style={red} >Non visible</p>
                        <select style={greyish} name="visible" id="visible" onChange={handleChange}>
                            <option value={false}>Modifier la visibilité...</option>
                            <option value={true}>Rendre visible dans la rubrique Catégories</option>
                        </select>
                    </>

                }
                </div>

                <div id="three">
                    <button style={green} className='btn5' type='submit'>Valider les modifications ✅</button>
                    <button style={greyish} className='btn5' type='button' onClick={() => navigate("/dashboard")}>Revenir en arrière 🔚</button>
                    <button style={red} className='btn5' type='button' onClick={handleDelete}>Supprimer la catégorie ❌</button>
                </div>

            </form>

            <section id='display-articles'>
                {cat.articles?.map(art => (
                    <div key={art._id}>
                        <img width={100} src={art.picture?.img}></img>
                        {art.name}
                    </div>
                ))}
            </section>

        </section>
    )
}

export default UpdateCat