import React from 'react'
import { useState } from 'react'

const HomeLatestAvis = () => {

    const [avis, setAvis] = useState([
            {
                id: 1,
                date: "Mar 4, 2024" ,
                username: "shoe-riya",
                starsRating: "⭐⭐⭐⭐⭐",
                comment: "Excellent seller. I received my goods very quickly. Great communication too. Perfect! Polishing the mount makes it even more beautiful.",
                img: "https://i.etsystatic.com/iap/39daab/5861992439/iap_600x600.5861992439_jz9wovd6.jpg?version=0",
                imgUser: ""
            },
            {
                id: 2,
                date: "Aug 12, 2021" ,
                username: "Kelvin Giles",
                starsRating: "⭐⭐⭐⭐⭐",
                comment: "A beautiful lamp exactly as expected from the photos and working perfectly! I didn\'t expect to have to pay customs charges 10% of the price of the lamp for UK delivery, but it was mentioned in the listing as a possibility. If I have one slight criticism it’s that I would have preferred a braided/vintage style flex instead of the cheap looking modern one. However, this is only a detail that I could quite easily get changed. Also, the photos made clear that was what came with it so it wasn’t a surprise. Overall I’m very pleased and would recommend Michel highly as a seller! Thank you.",
                img: "https://i.etsystatic.com/iap/7324ce/3260848730/iap_600x600.3260848730_gb6p3bpx.jpg?version=0",
                imgUser : "https://i.etsystatic.com/iusa/4a9fe2/89004696/iusa_50x50.89004696_2ksx.jpg?version=0"
            },
            {
                id: 3,
                date: "Mar 11, 2023 " ,
                username: "Francine",
                starsRating: "⭐⭐⭐⭐⭐",
                comment: "Unsurprising product as described and in good condition Quick delivery",
                img: "https://i.etsystatic.com/iap/d2e8bf/4760505599/iap_600x600.4760505599_og3v9xg6.jpg?version=0",
                imgUser: ""
            },
            {
                id: 4,
                date: "Jan 2, 2019" ,
                username: "Alva",
                starsRating: "⭐⭐⭐⭐⭐",
                comment: "I had purchased a Degue canopy with the original silk cords and only one socket. As it was to hang in a room with another Degue that has wrought iron hardware, I wanted to replace the silk hangings with metal. Michel to the rescue! He found the perfect set of items for a very fair price, and 'voilà', my new Degue is perfect. Thank you, Michel!",
                img: "https://i.etsystatic.com/iap/7107ab/1780419997/iap_600x600.1780419997_kqwh90aw.jpg?version=0",
                imgUser : "https://i.etsystatic.com/iusa/0337a2/63260504/iusa_50x50.63260504_e167.jpg?version=0"
            },

        ]
        )

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
                    <p style={{fontSize: '0.95rem', margin: 0, fontWeight: '400'}}>{avi.starsRating}</p>

                    <img
                                src={avi.img}
                                width={200}
                                height={200}
                    ></img>
                </div>
                <div className="card-back">
                    <strong>{avi.username} {avi.starsRating}</strong>
                    <p>''{avi.comment},,</p>
                </div>
                </div>

            </div>

))}

            </div>

        </section>

    )


}

export default HomeLatestAvis