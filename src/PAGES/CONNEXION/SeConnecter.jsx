import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';

//Context
import { AuthContext } from '../../UTILS/contexts/AuthContext'


const SeConnecter = () => {

    // D'abord, on crée un etat pour stocker l'user
    const [ user, setUser ] = useState({});
    const { login } = useContext(AuthContext);

    // Const handlechange, pour écouter les saisies input
    const handleChange = event => {
        const { name, value } = event.target;
        setUser(prevUser => ({...prevUser, [name]: value}))
    }

    // Const handleSubmit pour réaliser la co
    const handleSubmit = event => {
        event.preventDefault();
        // J'envoie les infos de l'user à la fonct login
        login(user)
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