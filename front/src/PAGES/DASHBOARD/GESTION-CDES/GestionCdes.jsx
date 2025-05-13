import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./style.scss"
import AXIOS_INSTANCE from '../../../UTILS/services/AxiosInstance';

const GestionCdes = () => {

    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try{
                const { data, status } = await AXIOS_INSTANCE.get('http://localhost:8000/lv/orders/all');
                if (status == 200) setOrders(data)

            }
            catch(error){
                console.log(error.message)
            }
        }

        fetchOrders();
    }, [])
    let i = 1;

    const blue = {
        backgroundColor:  " rgba(112, 192, 181, 0.56)",
        color: "rgb(18, 124, 110)",
        border: "1px solid rgba(112, 192, 181, 0.81)",
        padding: "2px 10px",
        borderRadius: "20px"
    }
    const green = {
        backgroundColor: " rgba(112, 192, 112, 0.56)",
        color: "green",
        border: "1px solid rgba(112, 192, 112, 0.75)",
        padding: "2px 10px",
        borderRadius: "20px"
    }

    return (
        <>
            <h2>Gestion des commandes</h2>
            <p>Modifier ou supprimer une commande</p>

            <table>
                {/* Intitulés de la table */}
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

                {/* Corps du tableau */}
                <tbody>

                    { orders.length !== 0 ?
                        orders
                        .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .map(item => (
                            <>
                                <tr key={item._id}>
                                    <td>{i++} - {item.user}</td>
                                    <td>{item.createdAt}</td>
                                    <td>{item.price} €</td>
                                    <td width={250}>
                                        {item.articles.map(item => (<p>{item.name}</p>))}
                                        {/* {item.articles} */}
                                    </td>
                                    {item.isShipped ?
                                    <td width={150}><span style={green}>Expédiée</span></td> :
                                    <td width={150}><span style={blue}>En attente</span></td>}
                                    <td>
                                        <Link to={{pathname: `/dashboard/update-order/${item._id}`}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#262626"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>
                                        </Link>
                                    </td>
                                </tr>

                            </>

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