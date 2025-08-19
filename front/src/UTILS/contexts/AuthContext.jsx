import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// URL CONSTANT
import URLS from '../constants/Api'
import AXIOS_INSTANCE from '../services/AxiosInstance'

// Créer un context d'authentification
export const AuthContext = createContext()

// Ts les composants qui sont enfants de ce contexte seront specifiés dans ce paramètre là
export const AuthProvider = ({ children }) => {

    // Etat pour stocker les infos de l'user connecté
    const [ auth, setAuth ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        isLoggedIn();
    }, [])

    //Fonction pour gérer l'authentification de l'user
    //On lui donne le nom qu'on veut, mais c'est user qu'on a transmis
    const login = async (userDataForm) => {
        try{
            setIsLoading(true);
            const { data, status } = await AXIOS_INSTANCE.post(URLS.POST_LOGIN, userDataForm)
            console.log("Vous êtes connecté, ", userDataForm.email)

            if(status===200) {
                setAuth(data)
                localStorage.setItem("auth", JSON.stringify(data));
                navigate(`/`)
                setIsLoading(false);
            }
        }
        catch(error){
            console.log(error.message)
            setIsLoading(false)
        }
    }

    const isLoggedIn = () => {
        setIsLoading(true)
        // Récupérer les données de l'user depuis le local storage
        const currentUser = localStorage.getItem('auth');
        const currentUserParsed = currentUser ? JSON.parse(currentUser) : null;
        setAuth(currentUserParsed);
        setIsLoading(false)
    }

    const logout = async () => {

        try{
            await AXIOS_INSTANCE.get('http://localhost:8000/lv/users/logout');
            setAuth(null);
            localStorage.removeItem('auth');
            navigate(`/`)
        }
        catch(error){
            console.log("Error: ", error.message)
        }

    }

    return (

        // Dans value on spécifie tout ce que les enfants pourront manipuler
        <AuthContext.Provider value={{login, logout, isLoading, auth}}>

            {children}

        </AuthContext.Provider>
    )
}