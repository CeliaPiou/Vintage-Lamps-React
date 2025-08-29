import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../api';

const VerificationPage = () => {
  const [message, setMessage] = useState("Vérification en cours...");
  const { token } = useParams();
  console.log(token)

  useEffect(() => {

    const verifyEmail = async () => {
        try {
        // console.log("Célia", token)

        if (!token) {
            setMessage("Aucun token fourni.");
            return;
        }

        const urlToFetch = `${API_URL}/lv/users/verify-email/${token}`;
        const { data, status } = await axios.put(urlToFetch);

        if (status === 200) {
            setMessage(data.message);
        }
        } catch (error) {
            console.error(error);
            setMessage(error.response?.data?.message || "Erreur lors de la vérification.");
        }
    };

    verifyEmail();
}, []);

    return (
        <div>
        <p>{message}</p>
        </div>
    );
};

export default VerificationPage;
