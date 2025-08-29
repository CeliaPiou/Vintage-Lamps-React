import React, { useState }from 'react'
import axios from 'axios'

// CONSTANT
import URLS from '../../UTILS/constants/Api'


const Sinscrire = () => {

    // état pour stocker le message d'erreur
    const [message, setMessage] = useState("");

    // Initialisation de l'état pour les informations de l'user
    const [user, setUser] = useState({
        username: "",
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            const response = await axios.post(URLS.POST_REGISTER, user);
            console.log(response, "Vous êtes enregistré")
        }
        catch(error){
            console.error('Error:', error.message);
            setMessage(`Erreur rencontrée : ${error.response?.data.error.message}`|| "Erreur lors de la vérification.");
        }

    }


    return (
    <>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username">username</label>
            <input
                type="text"
                required
                onChange={handleChange}
                id="username"
                placeholder="Enter your username"
                name='username'
            />
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
                type="password"
                required
                onChange={handleChange}
                id="password"
                placeholder="Enter your password"
                name='password'
            />

            <button className="btn4 mt-small">REGISTER</button>

            <p>{message}</p>

        </form>
    </>
    )
}

export default Sinscrire