import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const SeConnecter = () => {

    // Récupérer tous les clients déjà connectés
    const [ users, setUsers ] = useState([]);
    useEffect(() => {

        const fetchUsers = async () => {
            try{
                const { data, status } = await axios.get(`http://localhost:8000/lv/users/all`)
                if(status === 200) setUsers(data)
                console.log(users)
            }
            catch(error){
                console.log(error.message)
            }
        }

        fetchUsers();
    }, [])

    // Initialisation de l'état pour les informations avec un objet contenant des valeurs vides
    const [ myCred, setMyCred ] = useState({
        email: '',
        password: ''
    })

    // Mettre à jour l'état 'article' lorsque l'admin saisit du texte dans les champs de formulaire
    const handleChange = (event) => {
        const { name, value } = event.target;
        setMyCred(prevCred => ({ ...prevCred, [name]: value }))
        console.log(myCred)
    }

    // pour la soumission du formulaire
    const handleSubmit = async (event) => {

        event.preventDefault()

        try{
            const response = await axios.post('http://localhost:8000/lv/users/sign-in', myCred);
            alert("Connexion réalisée");
        }
        catch(error){
            console.error('Error:', error);
            alert('Une erreur a été rencontrée, les identifiants semblent incorrects')
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
                <p>Forgot password?</p>
            </form>
        </>
    )
}

export default SeConnecter