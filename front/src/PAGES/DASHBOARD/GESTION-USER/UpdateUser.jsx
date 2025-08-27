import React from 'react'
import { useEffect, useState } from 'react';
import AXIOS_INSTANCE from '../../../UTILS/services/AxiosInstance';
import { useParams, useNavigate } from 'react-router-dom';
// import { formatDate } from '../../../UTILS/helpers/FormatDate';
import './style.scss'
import { API_URL } from '../../../api';

const UpdateUser = () => {

    const renderStars = (rating) => '⭐'.repeat(rating);

    const [ user, setUser ] = useState([]);
    const [ userUpdated, setUserUpdated ] = useState([]);
    const params = useParams()
    const { id } = params;

    const navigate = useNavigate();

    // Je récupère l'user
    useEffect(() => {

        const fetchCust = async () => {
            try {
                const { data, status } = await AXIOS_INSTANCE.get(`${API_URL}/lv/users/${id}`);
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
            const response = await AXIOS_INSTANCE.put(`${API_URL}/lv/users/update/${id}`, userUpdated);
            alert("Utilisateur modifiée");
        }
            catch(error) {
            console.log("Error : ", error.message)
        }
    }

    // --- Supprimer un avis
    const deleteAvis = async (id) => {
        try{
            const result = await AXIOS_INSTANCE.delete(`${API_URL}/lv/avis/delete/${id}`);
            alert("L'avis a été supprimé")
        }
        catch(error){
            console.error('Error: ', error)
        }
    }


    return (
        <section id="recap-user-dashboard-admin">

            <div className='bubble'>
                <h2>Infos utilisateur</h2>

                {user.username}, {user.email} <br/>
                Inscrit le {user.createdAt}.
                {/* Inscrit le {formatDate(user.createdAt)}. */}

            </div>

            <div className='bubble flex'>

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
                    <strong>Commande effectuée : {user.orders.length} : </strong>
                    {user.orders.map((cde) => (
                        <p key={cde._id}>N° {cde._id}, le {cde.createdAt} // total : {cde.price},00 €</p>
                    ))}
                </>:
                <p>
                    Cet utilisateur n'a pas encore passé de commande.
                </p>}

                <hr></hr>

                {user.avis?.length > 0 ?
                <>
                    <strong>Avis laissés : {user.avis?.length} </strong>
                    <div>
                        {user.avis.map((avi => (
                            <div key={avi._id}>
                                <p> {renderStars(avi.rating)}, le {avi.createdAt}
                                {/* Bouton supprimer */}
                                <svg onClick={() => deleteAvis(avi._id)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#992B15"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                </p>
                                <em> {avi.content} </em>
                            </div>
                        )))}
                    </div>
                </>
                :
                    <p>Cet utilisateur n'a pas encore laissé d'avis.</p>
                }

            </div>

            <button className='btn4' type="button" onClick={() => navigate('/dashboard')}>Revenir en arrière</button>



        </section>
    )
}

export default UpdateUser