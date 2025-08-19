import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../UTILS/contexts/AuthContext'
import axios from 'axios';


const DashboardUser = () => {

    const { auth } = useContext(AuthContext);

    const [orders, setOrders] = useState([]);
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


    return (
        <>
            <h2>Bonjour {auth.others?.username} !</h2>

            <main>
                <h2>+ Historique des commandes +</h2>
                <div>
                    {auth.others?.orders.length>0?
                    // Afficher les commandes passées
                    <>
                        {/* Vous avez passé {auth.others?.orders.length} commandes. Voir le détail. */}
                        Vous avez passé {user.orders?.length} commandes. Voir le détail.
                        {console.log(user.orders)}

                        <div id='container-of-orders'>
                            {user.orders?.map(order => (
                                <div className='order-box'>
                                    <div className='grey-part'>
                                        <h3>Cde effectuée le {order.createdAt}</h3>
                                        <p>Total {order.price},00 € </p>
                                        <p>N° de commande {order._id} </p>
                                    </div>
                                </div>
                            ))}
                        </div>

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