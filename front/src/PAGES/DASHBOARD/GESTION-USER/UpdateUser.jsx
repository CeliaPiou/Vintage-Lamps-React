import React from 'react'
import { useEffect, useState } from 'react';
import AXIOS_INSTANCE from '../../../UTILS/services/AxiosInstance';
import { useParams, useNavigate } from 'react-router-dom';
import './style.scss'

const UpdateUser = () => {

    const [ user, setUser ] = useState([]);
    const [ userUpdated, setUserUpdated ] = useState([]);
    const params = useParams()
    const { id } = params;

    const navigate = useNavigate();

    // Je récupère l'user
    useEffect(() => {

        const fetchCust = async () => {
            try {
                const { data, status } = await AXIOS_INSTANCE.get('http://localhost:8000/lv/users/'+id);
                if (status === 200) {
                    setUser(data)
                }
            }
            catch(error){
                console.log("Error, ", error.message)
            }
        };

        fetchCust();

    }, [])

    // Créer un tableau d'Etat pour stocker les nouvelles infos
    useEffect(() => {
        if (user) {
            setUserUpdated({
                username: user.username || "",
                email: user.email || "",
                role: user.role || ""
            });
        }
    }, [user]);

    // handle Change
    const handleChange = event => {
        const { name, value } = event.target;
        setUserUpdated((prev) => ({
            ...prev, [name]: value
        }))
    };

    // -- HandleSubmit
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await AXIOS_INSTANCE.put("http://localhost:8000/lv/users/update/"+id, userUpdated);
            alert("Utilisateur modifiée");
        }
            catch(error) {
            console.log("Error : ", error.message)
        }
    }


    return (
        <section id="recap-user-dashboard-admin">

            <div className='bubble'>
                <h2>Infos utilisateur</h2>

                {user.username}, {user.email} <br/>
                Inscrit le {user.createdAt}.
            </div>

            <div className='bubble flex'>
                {/* <div>
                    <legend>Status</legend>
                    <select name="isActive" id="isActive"
                    // onChange={handleChange}
                    >
                        <option value={}>Actif</option>
                        <option value={}>Inactif</option>
                    </select>
                </div> */}

                <form onSubmit={handleSubmit}>
                    <legend>Role</legend>
                    <select name="role" id="role"
                    onChange={handleChange}
                    >
                        <option value={"admin"}>Admin</option>
                        <option value={"user"}>Utilisateur</option>
                    </select>
                    <br/>
                    <button className='btn4' type="submit">Valider les modifications</button>
                </form>
            </div>


            <div className='bubble'>
                <h2>Articles & Commandes</h2>
                {user.orders?.length > 0 ?
                <>
                    <p>Commande effectuée : {user.orders.length} : </p>
                    {user.orders.map((cde) => (
                        <p key={cde._id}>N° {cde._id}, total : {cde.price},00 €</p>
                    ))}
                </>:
                <>
                    Cet utilisateur n'a pas encore passé de commande.
                </>}

            </div>

            <button className='btn4' type="button" onClick={() => navigate('/dashboard')}>Revenir en arrière</button>



        </section>
    )
}

export default UpdateUser