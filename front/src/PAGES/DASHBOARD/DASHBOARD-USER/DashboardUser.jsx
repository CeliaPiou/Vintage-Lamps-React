import './style.scss'

import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../UTILS/contexts/AuthContext';
import axios from 'axios';

import { formatDate } from '../../../UTILS/helpers/FormatDate.jsx'



const DashboardUser = () => {

    const { auth } = useContext(AuthContext);

    // Récupérer les infos de l'user
    const [user, setUser] = useState([]);
    useEffect(() => {

        const fetchUser = async () => {
            try {
                const urlToFetch =  "http://localhost:8000/lv/users/"+auth?.others?._id;

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
        <>
            <h2>Bonjour {auth.others?.username} !</h2>

            <main>
                <h2>+ Historique des commandes +</h2>
                <div>
                    {auth.others?.orders.length>0?
                    // Afficher les commandes passées
                    <>
                        Vous avez passé {user.orders?.length} commandes.
                        <br/>

                        <button onClick={() => setShowOrders(!showOrders)} className="">
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
            </main>
        </>
    )
}

export default DashboardUser