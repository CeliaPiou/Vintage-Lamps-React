import "./style.scss"
import React, { useEffect, useState } from 'react'
import { Link }         from 'react-router-dom';
import AXIOS_INSTANCE   from '../../../UTILS/services/AxiosInstance';
import { API_URL }      from '../../../api';
import { formatDate }   from '../../../UTILS/helpers/FormatDate'

const GestionCdes = () => {

    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try{
                const { data, status } = await AXIOS_INSTANCE.get(`${API_URL}/lv/orders/all`);
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

    const handleDelete = async (id) => {
        try {
            const result = await AXIOS_INSTANCE.delete(`${API_URL}/lv/orders/${id}/delete`);
            alert("La commande a été supprimée")
        }
        catch(error) {
            console.log(error.message)
        }
    }

    return (
        <main>
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
                                    <td>{formatDate(item.createdAt)}</td>
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
                                        <svg onClick={() => handleDelete(item._id)} xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="red"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>

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
        </main>
    )
}

export default GestionCdes