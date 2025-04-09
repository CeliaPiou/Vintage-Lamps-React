import React, { useState, useEffect } from 'react'
import axios from 'axios';


// CONSTANT
import URLS from '../../UTILS/constants/Api'
import { REGISTER_FIELDS } from '../../UTILS/configs/FormFields';

const Register = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
        email: ""
    });

    const handleChange = event => {
        const { name, value } = event.target;
        /// Vérifier si ça fonctionne:

        /// On fait une copie de la dernière version avant la dernière modification,
        /// On saisit la propriété, et ici entre crochet, au lieu de spécifier les input,
        /// On met name qui est dynamique et qui va donc cibler la proprieté de chaque
        /// Et lui attribuer la valeur
        setUser(prevUser => ({...prevUser, [name] : value }))
    }

    const handleSubmit = async event => {
        event.preventDefault();
        /// On vérifie si c'est bien récupéré
        // console.log(user)

        try{
            const response = await axios.post(URLS.POST_REGISTER, user);
        }
        catch(error){
            console.log(error.message)
        }
    }

    return (
        <>
            <h1>Cours sur l'inscription</h1>

            <form onSubmit={handleSubmit} className='flex column'>

                {REGISTER_FIELDS.map(field => (
                    <div key={field.id}>

                        <label htmlFor={field.id}>{field.label}</label>
                        <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            id={field.id}
                            onChange={handleChange}
                        />
                    </div>
                ))}

                <button className='btn4 mt-small'>Register</button>

            </form>
        </>
    )
}

export default Register