import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AXIOS_INSTANCE from '../../../UTILS/services/AxiosInstance';

const GestionUser = () => {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try{
                const { data, status } = await AXIOS_INSTANCE.get('http://localhost:8000/lv/users/all');
                if (status == 200) setUsers(data)

            }
            catch(error){
                console.log(error.message)
            }
        }
        fetchCustomers();
    }, []);

    const deleteUser = async (id) => {

        try{
            const result = await AXIOS_INSTANCE.delete('http://localhost:8000/lv/users/delete/'+id);
            alert("L'utilisateur a été supprimé")
        }
        catch(error){
            console.error('Error: ', error)
        }

    }

return (
    <>
        <h2>Gestion des utilisateurs</h2>

        <table>
            {/* Intitulés de la table */}
            <thead>
                <tr>
                    <th width={250}>Utilisateur</th>
                    <th width={100}>Rôle</th>
                    <th>Date d'inscription</th>
                    <th>Actions</th>
                </tr>
            </thead>

            {/* Corps du tableau */}
            <tbody>

                { users.length !== 0 ?
                    users
                    .sort((a,b) => new Date(a.createdAt) - new Date(b.createdAt))
                    .map((item) => (
                        <>
                            <tr key={item._id}>
                                <td>{item.username} <br/> {item.email}</td>
                                <td>{item.role}</td>
                                <td>{item.createdAt} €</td>
                                <td>
                                    <Link to={{pathname: `/dashboard/update-user/${item._id}`}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#262626"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/></svg>
                                    </Link>
                                    <svg onClick={() => deleteUser(item._id)} xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="red"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
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

export default GestionUser