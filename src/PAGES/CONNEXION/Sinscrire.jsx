import React, { useState }from 'react'
import axios from 'axios'

// CONSTANT
import URLS from '../../UTILS/constants/Api'
import { REGISTER_FIELDS } from '../../UTILS/configs/FormFields';


const Sinscrire = () => {

    // Initialisation de l'état pour les informations de l'user
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    // Mettre à jour l'état 'article' lorsque l'admin saisit du texte dans les champs de formulaire
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    }

    // pour la soumission du formulaire
    const handleSubmit = async (event) => {

        event.preventDefault()

        try{
            const response = await axios.post(URLS.POST_REGISTER, user);
            alert("utilisateur enregistré");
        }
        catch(error){
            console.error('Error:', error);
        }

    }


    return (
    <>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                required
                onChange={handleChange}
                id="email"
                placeholder="Enter your mail"
                name='email'
                />
            <label htmlFor="password">Password</label>
            <input
                type="text"
                required
                onChange={handleChange}
                id="password"
                placeholder="Enter your password"
                name='password'
            />

<button className="btn4 mt-small">REGISTER</button>

        </form>
    </>
    )
}

export default Sinscrire