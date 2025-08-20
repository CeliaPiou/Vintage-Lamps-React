import React, {useEffect, useState} from 'react'

const Avis = () => {

    const [ rating, setRating ] = useState(0);
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (rating === 0 || content.trim() === "") {
            alert("Merci de remplir la note et le commentaire !");
            return;
        }

        const newAvis = {
            rating,
            content,
            image,
            createdAt: new Date().toISOString(),
        };

        console.log("Avis : ", newAvis)
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