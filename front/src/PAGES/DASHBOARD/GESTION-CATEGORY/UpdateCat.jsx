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
        name: cat.name ,
        image: cat.image
    });

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

                <button className='btn5' type='button' onClick={handleDelete}>Supprimer la catégorie</button>
                <button className='btn5' type='submit'>Modifier la catégorie</button>
                <button className='btn5' type='button' onClick={() => navigate("/dashboard")}>Revenir en arrière</button>


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