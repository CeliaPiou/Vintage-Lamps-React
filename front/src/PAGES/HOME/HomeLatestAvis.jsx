import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const HomeLatestAvis = () => {

    const renderStars = (rating) => '⭐'.repeat(rating);

    const [avisManually, setAvisManually] = useState([
            {
                id: 1,
                createdAt: "Mar 4, 2024" ,
                username: "shoe-riya",
                rating: "5",
                content: "Excellent seller. I received my goods very quickly. Great communication too. Perfect! Polishing the mount makes it even more beautiful.",
                image: "https://i.etsystatic.com/iap/39daab/5861992439/iap_600x600.5861992439_jz9wovd6.jpg?version=0",
                imgUser: ""
            },
            {
                id: 2,
                createdAt: "Aug 12, 2021" ,
                username: "Kelvin Giles",
                rating: "5",
                content: "A beautiful lamp exactly as expected from the photos and working perfectly! I didn\'t expect to have to pay customs charges 10% of the price of the lamp for UK delivery, but it was mentioned in the listing as a possibility. If I have one slight criticism it’s that I would have preferred a braided/vintage style flex instead of the cheap looking modern one. However, this is only a detail that I could quite easily get changed. Also, the photos made clear that was what came with it so it wasn’t a surprise. Overall I’m very pleased and would recommend Michel highly as a seller! Thank you.",
                image: "https://i.etsystatic.com/iap/7324ce/3260848730/iap_600x600.3260848730_gb6p3bpx.jpg?version=0",
                imgUser : "https://i.etsystatic.com/iusa/4a9fe2/89004696/iusa_50x50.89004696_2ksx.jpg?version=0"
            },
            {
                id: 3,
                createdAt: "Mar 11, 2023 " ,
                username: "Francine",
                rating: "5",
                content: "Unsurprising product as described and in good condition Quick delivery",
                image: "https://i.etsystatic.com/iap/d2e8bf/4760505599/iap_600x600.4760505599_og3v9xg6.jpg?version=0",
                imgUser: ""
            },
            {
                id: 4,
                createdAt: "Jan 2, 2019" ,
                username: "Alva",
                rating: "5",
                content: "I had purchased a Degue canopy with the original silk cords and only one socket. As it was to hang in a room with another Degue that has wrought iron hardware, I wanted to replace the silk hangings with metal. Michel to the rescue! He found the perfect set of items for a very fair price, and 'voilà', my new Degue is perfect. Thank you, Michel!",
                image: "https://i.etsystatic.com/iap/7107ab/1780419997/iap_600x600.1780419997_kqwh90aw.jpg?version=0",
                imgUser : "https://i.etsystatic.com/iusa/0337a2/63260504/iusa_50x50.63260504_e167.jpg?version=0"
            },

        ]
        );
    const [avisRecorded, setAvisRecorded] = useState([]);

    const [avis, setAvis] = useState(avisManually);

    useEffect(() => {

        const fetchArticles = async() => {

            try{
                const { data, status } = await axios.get(`http://localhost:8000/lv/avis/all`);
                if (status === 200) {
                    const formattedData = data.map(item => ({
                        id: item._id,
                        createdAt: item.createdAt || item.date,
                        username: item.username || item.user.username,
                        rating: item.rating || item.rating,
                        content: item.content || item.content,
                        image: item.image,
                        imgUser: item.imgUser || ""
                    }));
                    setAvis([...avisManually, ...formattedData]);
                }
            }
            catch(error){
                console.log(error.message)
            }
        }

        fetchArticles();
    }, [])


    return (

        <section className='container mt-big'>

            <h2 className='text-center'>Vos avis</h2>

            <div className='flex container justify-center' id="reviews">

            {avis.map((avi) => (

            <div key={avi.id}
                className='card flip-card-container'
            >
                <div className="flip-card">
                <div className='card-front'>
                    <p style={{fontSize: '0.95rem', margin: 0, fontWeight: '400'}}>{avi.date}</p>
                    <p style={{fontSize: '1.2rem', margin: 0, fontWeight: 'bold'}}>{avi.username}</p>
                    <p style={{fontSize: '0.95rem', margin: 0, fontWeight: '400'}}>{renderStars(avi.rating)}</p>

                    {avi.image ?
                        <img alt="Image de l'avis" src={avi.image} width={200} height={200}></img>
                        :
                        <img alt="Image de l'avis" src='https://sdmntprnortheu.oaiusercontent.com/files/00000000-dafc-61f4-a015-9cde6ff5ff5a/raw?se=2025-08-21T20%3A04%3A39Z&sp=r&sv=2024-08-04&sr=b&scid=deab5f1a-d5be-5c3c-ba06-424a6c249a7b&skoid=0a4a0f0c-99ac-4752-9d87-cfac036fa93f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-21T08%3A42%3A03Z&ske=2025-08-22T08%3A42%3A03Z&sks=b&skv=2024-08-04&sig=t4Qjnt%2Blx7cTMQ/5NvQbhbAxVC/M/HGtbPlguQW6UX0%3D' width={200} height={200}></img>
                    }

                </div>
                <div className="card-back" key={avi.id}>
                    <strong>{avi.username} {renderStars(avi.rating)}</strong>
                    <p>'' {avi.content} ,,</p>
                </div>
                </div>

            </div>

))}

            </div>

        </section>

    )


}

export default HomeLatestAvis