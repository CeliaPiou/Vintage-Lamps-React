import React from 'react'
import AXIOS_INSTANCE from '../../../UTILS/services/AxiosInstance'
import { useEffect, useState } from 'react'
import { API_URL } from '../../../api';
import { formatDate } from '../../../UTILS/helpers/FormatDate';
import { Link } from 'react-router-dom';

import "./style.scss"

const GestionMessages = () => {

    // On récupère les messages
    const [messages, setMessages]= useState([]);
    useEffect(() => {
        const fetchMessages = async () => {
            try{
                const { data, status } = await AXIOS_INSTANCE.get(`${API_URL}/lv/contact/all`)
                if (status == 200) { setMessages(data)
                    console.log(data)
                }
            }
            catch(error){
                console.log(error.message)
            }
        };

        fetchMessages();
    }, [])


    return (
        <>

        <h1>Gestion des messages</h1>
        <strong>Vous avez reçu {messages.length} messages.</strong>

        <div id='container-messages'>

            {messages.map(item => (

                <div className='message-box' key={item._id}>
                    {item.status == "new" ?
                        <div className='logo-envelop'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#2854C5"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h404q-4 20-4 40t4 40H160l320 200 146-91q14 13 30.5 22.5T691-572L480-440 160-640v400h640v-324q23-5 43-14t37-22v360q0 33-23.5 56.5T800-160H160Zm0-560v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
                        </div>
                        :
                        <div className='logo-envelop'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#48752C"><path d="M638-80 468-250l56-56 114 114 226-226 56 56L638-80ZM480-520l320-200H160l320 200Zm0 80L160-640v400h206l80 80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v174l-80 80v-174L480-440Zm0 0Zm0-80Zm0 80Z"/></svg>
                        </div>
                    }
                    <p>De : <strong>{item.name}</strong></p>
                    <p>Reçu le : <strong>{formatDate(item.createdAt)}</strong></p>
                    <Link to={{pathname: `/dashboard/message/${item._id}`}}>
                        <button className='btn4'>Lire le message</button>
                    </Link>
                </div>
            ))}

        </div>

        </>
    )
}

export default GestionMessages