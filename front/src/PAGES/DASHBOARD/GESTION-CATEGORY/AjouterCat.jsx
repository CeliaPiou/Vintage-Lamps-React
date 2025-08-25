import React from 'react'
import { useEffect, useState } from 'react'
import AXIOS_INSTANCE from '../../../UTILS/services/AxiosInstance'
import "./style.scss"
import { API_URL } from './../../../api';


const AjouterCat = ({addCat, setAddCat}) => {

    // Initialisation de l'état pour les informations avec un objet contenant des valeurs vides
    const [cat, setCat] = useState({
        name: "",
        image: ""
    })

    // Mettre à jour l'état 'article' lorsque l'admin saisit du texte dans les champs de formulaire
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCat(prevCat => ({ ...prevCat, [name]: value }));
        console.log(name, value)
    }

    // pour la soumission du formulaire
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await AXIOS_INSTANCE.post(`${API_URL}/lv/category/add`, cat);
            alert("Catégorie ajoutée !");
            setAddCat(false)
        }
        catch(error) {
            console.log("Error : ", error.message)
        }
    }

    // Pour le retour en arrière
    const closeWindow = () => {
        setAddCat(false)
    }


    return (

        <section id="adding-cat">

            <form onSubmit={handleSubmit} id="container-adding-cat">

                <button id="btn-return" onClick={closeWindow} type="button">X</button>

                {/* Ajouter un nom */}
                <div>
                    <label htmlFor='name'><strong style={{ fontSize: "1.0rem" }}>Nom de la catégorie</strong></label>
                    <input
                    type='text'
                    id='name'
                    name="name"
                    required
                    placeholder="Nom de la catégorie"
                    onChange={handleChange}
                    ></input>
                </div>

                {/* Ajouter une image */}
                <div>
                    <label htmlFor='name'><strong style={{ fontSize: "1.0rem" }}>Une image ? (facultatif)</strong></label>
                    <input
                    type='text'
                    id='image'
                    name="image"
                    placeholder="Une image ?"
                    onChange={handleChange}
                    ></input>
                </div>

                <button className='btn5' type='submit'>Valider</button>


            </form>

        </section>

    )
}

export default AjouterCat