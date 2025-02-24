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
            <h3>Choose a pick-up option, for a greener and more connected experience</h3>
            <p>Why wait for a delivery when you can pick up your order right in Paris ?
            By choosing pick-up, you help reduce carbon emissions, avoid unnecessary packaging,
            and contribute to a more sustainable future. Plus, you’re supporting local businesses and creating a stronger community connection.
            Make a positive impact today—skip the delivery and come pick up your order!</p>
            <button className='btn2'>Know more</button>
        </div>

    </section>

  )

}

export default HomeDelivery