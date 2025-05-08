import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GestionCdes = () => {

    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try{
                const { data, status } = await axios.get('http://localhost:8000/lv/orders/all');
                if (status == 200) setOrders(data)
                    console.log("Orders reçues:", data)

            }
            catch(error){
                console.log(error.message)
            }
        }

        fetchOrders();
    }, [])

    return (
        <>
            <h2>Gestion des commandes</h2>
            <p>Modifier ou supprimer une commande</p>

            <table>
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Date</th>
                        <th>Montant</th>
                        <th>Article(s)</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    { orders.length !== 0 ?
                        orders.map(item => (
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.price}</td>
                                <td>{item.articles}
                                </td>
                                <td>{item.isShipped}</td>
                            </tr>
                        ))
                    :
                    <tr>
                        <td colSpan={6}>
                            <em>Aucune commande pour le moment.</em>
                        </td>
                    </tr>
                    }

                </tbody>
            </table>
        </>
    )
}

export default GestionCdes