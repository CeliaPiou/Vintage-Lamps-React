import './style.scss'

import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../UTILS/contexts/AuthContext';
import axios from 'axios'
import { Link } from 'react-router-dom'

import { formatDate } from '../../../UTILS/helpers/FormatDate.jsx'
import { API_URL } from '../../../api.js';




const DashboardUser = () => {

    const { auth, logout } = useContext(AuthContext);

    // Récupérer les infos de l'user
    const [user, setUser] = useState([]);
    useEffect(() => {

        const fetchUser = async () => {
            try {

                const urlToFetch = `${API_URL}/lv/users/${auth?.others?._id}`;

                const { data, status } = await axios.get(urlToFetch);
                if(status === 200) {
                    // const { password, ...others } = data
                    setUser(data);
                }
            }
            catch(error) {
                console.log(error.message)
            }
        }

        fetchUser();

    }, [])

    // Montrer les commandes au click
    const [showOrders, setShowOrders] = useState(false);


    return (
        <main id='dashboard-user'>
            <h2>Bonjour {auth.others?.username} !</h2>
            <button className="invisible-button btn5"  onClick={logout}>Se déconnecter</button>


            <div>
                <h2>+ Historique des commandes +</h2>
                <div id='historic-orders'>
                    {auth.others?.orders.length>0?
                    // Afficher les commandes passées
                    <>
                        Vous avez passé {user.orders?.length} commandes.
                        <br/>

                        <button className='invisible-button' onClick={() => setShowOrders(!showOrders)}>
                        {showOrders ? "Masquer le détail" : "Voir le détail"}
                        </button>

                        {showOrders && (
                            <div id='container-of-orders'>
                                {user.orders?.map(order => (
                                    <div className='order-box'>
                                        <div className='grey-part'>
                                            <h3>Cde effectuée le {formatDate(order.createdAt)}</h3>
                                            <p>Total {order.price},00 € </p>
                                            <p>Statut : {order.isShipped ? "Expédié" : "En attente d'expédition"} </p>
                                            <p>N° de commande {order._id} </p>
                                        </div>

                                        <div className='content-order'>
                                            Mettre la liste des articles
                                        </div>

                                        <div>
                                            {order.isShipped &&
                                            <Link to={{ pathname: `/order/${order._id}`}}>
                                                <button className='invisible-button'>Laisser un avis sur cette commande</button>
                                            </Link>
                                            }
                                        </div>
                                    </div>
                                )
                                )}
                            </div>
                        )}
                    </>
                    :
                    // Si pas de commandes:
                    <p>Vous n'avez pas encore passé de commande.</p>
                    }
                </div>

                <h2>+ Mon compte +</h2>
                <div> </div>

                <h2>+ Mes échanges +</h2>

                    <div id='mes-avis'>

                        <h3>Mes avis</h3>

                        {user.avis?.length > 0 ?
                        // Si il y'a des avis
                        <>
                        {user.avis?.map(avi => (
                            <div key={avi._id}
                            className='card flip-card-container'>
                                <div className="flip-card">
                                <div className='card-front'>
                                    <p style={{fontSize: '0.95rem', margin: 0, fontWeight: '400'}}>{formatDate(avi.createdAt)}</p>
                                    <p style={{fontSize: '0.95rem', margin: 0, fontWeight: '400'}}>{avi.rating}/5</p>
                                    { avi.image ?
                                    <img src={avi.image} alt='Image du client' width={200} height={200}></img>
                                    :
                                    <img src='https://sdmntprnortheu.oaiusercontent.com/files/00000000-dafc-61f4-a015-9cde6ff5ff5a/raw?se=2025-08-21T20%3A04%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=deab5f1a-d5be-5c3c-ba06-424a6c249a7b&skoid=0a4a0f0c-99ac-4752-9d87-cfac036fa93f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-21T08%3A42%3A03Z&ske=2025-08-22T08%3A42%3A03Z&sks=b&skv=2024-08-04&sig=t4Qjnt%2Blx7cTMQ/5NvQbhbAxVC/M/HGtbPlguQW6UX0%3D' alt="Image pour illustrer l'avis" width={200} height={200}></img> }
                                </div>
                                <div className="card-back">
                                    <strong> {avi.rating}/5 </strong>
                                    <p>'' {avi.content} ,,</p>
                                </div>
                            </div>
                        </div>
                        ))}
                        </>
                        :
                        <p>Aucun avis publié.</p>
                        }
                    </div>
            </div>
        </main>
    )
}

export default DashboardUser