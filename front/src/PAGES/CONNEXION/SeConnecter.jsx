import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';

//Context
import { AuthContext } from '../../UTILS/contexts/AuthContext'


const SeConnecter = () => {

    // état pour stocker le message d'erreur
    const [message, setMessage] = useState("");

    // D'abord, on crée un etat pour stocker l'user
    const [ user, setUser ] = useState({});
    const { login } = useContext(AuthContext);

    // Const handlechange, pour écouter les saisies input
    const handleChange = event => {
        const { name, value } = event.target;
        setUser(prevUser => ({...prevUser, [name]: value}))
    }

    // Const handleSubmit pour réaliser la co
    const handleSubmit = async (event) => {
        event.preventDefault();

        // J'envoie les infos de l'user à la fonct login
        try {
            await login(user)
        }
        catch(error) {
            console.error(error.message);
            setMessage(`Erreur rencontrée : ${error.response?.data.error.message}`|| "Erreur lors de la vérification.");
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    required
                    type="email"
                    onChange={handleChange}
                    id="email"
                    placeholder="Enter your mail"
                    name="email"
                    />

                <label htmlFor="password">Password</label>
                <input
                    required
                    type='password'
                    onChange={handleChange}
                    id="password"
                    placeholder="Enter your password"
                    name='password'
                    />

                <button type="submit" className="btn4 mt-small">
                LOGIN
                </button>

                <p>{message}</p>
                {/* <p>Forgot password?</p> */}
            </form>
        </>
    )
}

export default SeConnecter