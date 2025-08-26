import React, { useEffect, useState, useContext } from 'react'
import { useParams } from "react-router-dom";
import AXIOS_INSTANCE from '../../../UTILS/services/AxiosInstance'
import { AuthContext } from '../../../UTILS/contexts/AuthContext';


const Avis = () => {

    const { auth } = useContext(AuthContext);

    const [ rating, setRating ] = useState(0);
    const [ content, setContent ] = useState("");
    const [ image, setImage ] = useState(null);

    const { id } = useParams()

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (rating === 0 || content.trim() === "") {
            alert("Merci de remplir la note et le commentaire !");
            return;
        }

        const newAvis = {
            rating,
            content,
            image,
            order: id,
            user: auth.others._id,
            createdAt: new Date().toISOString(),
        };

        // console.log("Avis : ", newAvis)

        try{
            const response = await AXIOS_INSTANCE.post('/lv/avis/add', newAvis);
            alert("Avis ajouté");
        }
        catch(error){
            console.error('Error:', error);
        }
    }

    return (

        <main>
            <h2>Laisser un avis</h2>

            <form onSubmit={handleSubmit}>

                <label>Note : </label>
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className={`text-2xl ${
                        star <= rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                    >
                        ★
                    </button>
                ))}

                <label>Commentaire :</label>
                <textarea value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Votre avis..."
                ></textarea>

                <label>Image :</label>
                <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="block w-full"
                />
                {image && (
                    <p className="text-sm text-gray-600 mt-1">
                    Image sélectionnée : {image.name}
                    </p>
                )}

                <button type='submit'>Soumettre</button>
            </form>

        </main>

    )
}

export default Avis