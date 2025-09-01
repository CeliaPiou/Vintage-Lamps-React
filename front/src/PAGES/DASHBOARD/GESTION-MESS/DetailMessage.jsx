import React            from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate }    from 'react-router-dom'

import { API_URL }      from '../../../api'
import { formatDate }   from '../../../UTILS/helpers/FormatDate';
import AXIOS_INSTANCE   from '../../../UTILS/services/AxiosInstance'


const DetailMessage = () => {

    // poquito de style
    const red = {
        backgroundColor:  " rgba(253, 130, 130, 0.84)",
        color: "rgb(212, 0, 0)",
        border: "1px solid rgba(182, 0, 0, 0.81)",
        padding: "5px 10px",
        borderRadius: "20px",
        marginTop: "20px",
        marginBottom: "20px"
    }
    const green = {
        backgroundColor: " rgba(112, 192, 112, 0.56)",
        color: "green",
        border: "1px solid rgba(112, 192, 112, 0.75)",
        padding: "5px 10px",
        borderRadius: "20px",
        marginTop: "20px",
        marginBottom: "20px"
    }
    const greyish = {
        backgroundColor: " rgba(187, 187, 187, 0.15)",
        color: "rgba(87, 87, 87, 0.9)",
        border: "1px solid rgba(146, 146, 146, 0.47)",
        padding: "3px 10px",
        fontSize: "0.9rem",
        borderRadius: "20px"
    }

    // Récupérer l'id de l'url
    const params = useParams();
    const { id } = params;
    const navigate = useNavigate();


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

    // Pour le retour en arrière
    const handleReturn = async (event) => {
        navigate('/dashboard');
    }

    // Pour la suppression
    const handleDelete = async (event) => {

        try{
            const result = await AXIOS_INSTANCE.delete(`${API_URL}/lv/contact/${id}/delete`);
            alert("Le message a bien été supprimé")
            navigate('/dashboard');

        }
        catch(error){
            console.error('Error: ', error)
        }

    }

    // Pour le passage en "lu"
    const [status, setStatus] = useState(
        {status: "read"}
    );
    const handleIsRead = async (event) => {
        try{
            const isRead = await AXIOS_INSTANCE.put(`${API_URL}/lv/contact/${id}/isread`, status)
            alert('Ce message a bien été passé en lu.')
        }
        catch(error){
            console.log(error.message)
        }
    }

    return (
        <section id='container-of-message'>
            <div className='display-of-message'>
                {console.log(message)}

                {message.length == 0 ?
                <>
                <div>
                    <p>Impossible de lire ce message.</p>
                    <button style={greyish} className='btn5' onClick={() => handleReturn()}>Revenir en arrière</button>
                </div>
                </>
                :
                <>
                    <div>
                        <p>Message de : <strong>{message.name} | {message.email}</strong></p>
                        <p>Reçu le : <strong>{formatDate(message.createdAt)}</strong></p>
                        <p>Message : </p>
                        <p><strong>{message.message}</strong></p>
                    </div>
                    <div id="buttons-display">
                        {message.status == "new" ?
                            <button style={green} className='btn5' onClick={() => handleIsRead()}>Passer en lu</button>
                            :
                            ""
                        }
                        <button style={greyish} className='btn5' onClick={() => handleReturn()}>Revenir en arrière</button>
                        <button style={red} className='btn5' onClick={() => handleDelete()}>Supprimer ce message</button>
                    </div>
                </>
            }

            </div>
        </section>
    )
}

export default DetailMessage