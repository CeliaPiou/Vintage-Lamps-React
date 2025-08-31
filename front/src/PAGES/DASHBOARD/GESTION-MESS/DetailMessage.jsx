import React from 'react'
import { useEffect, useState } from 'react'
import AXIOS_INSTANCE from '../../../UTILS/services/AxiosInstance'
import { API_URL } from '../../../api'
import { useParams } from 'react-router-dom'


const DetailMessage = () => {

    // Récupérer l'id de l'url
    const params = useParams();
    const { id } = params;

    // Récupérer les messages
    const [message, setMessage] = useState([]);
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const { data, status } = await AXIOS_INSTANCE.get(`${API_URL}/lv/contact/${id}`)
                if (status == 200) {setMessage(data)}
            }
            catch(error){
                console.log(error.message)
            }
        };
        fetchMessage();
    }, [])

    return (
        <>
            {message.message}
        </>
    )
}

export default DetailMessage