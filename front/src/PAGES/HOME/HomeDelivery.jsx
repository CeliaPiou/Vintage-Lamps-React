import React from 'react'

const HomeDelivery = () => {

  return (

    <section id="deliveries" className='flex mt-big justify-space-between'>

        <div className='gauche flex justify-center'>
            <div>
                <img
                width={450}
                src="https://upload.wikimedia.org/wikipedia/commons/6/66/Entr%C3%A9e_Station_M%C3%A9tro_Bolivar_Avenue_Secr%C3%A9tan_-_Paris_XIX_%28FR75%29_-_2021-07-25_-_1.jpg" alt='subway'></img>
            </div>
        </div>

        <div className='droite flex'>
            <h3>Choisissez l’option de retrait pour une expérience plus écologique et connectée</h3>
            <p>Pourquoi attendre une livraison alors que vous pouvez récupérer votre commande directement à Paris ? En choisissant le retrait, vous contribuez à réduire les émissions de carbone, à éviter les emballages inutiles et à participer à un avenir plus durable. De plus, vous soutenez les commerces locaux et renforcez le lien avec votre communauté. Agissez positivement dès aujourd’hui : passez la livraison et venez chercher votre commande !</p>
            <button className='btn4'>En savoir plus</button>
        </div>

    </section>

  )

}

export default HomeDelivery