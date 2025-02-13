import React from 'react'

const Footer = () => {

  return (

    <footer className='w-100'>

      <section id="pre-footer" className='flex one justify-center'>

        <div className='flex column'>
          <img src="https://i.ibb.co/9mRfWCLB/ic-outline-paypal.png" height='70px' alt="paypal"></img>
          <h2>Securised payments</h2>
        </div>

        <div className='flex column'>
          <img src="https://i.ibb.co/fz0TTwV1/pajamas-nature.png" height='70px' alt="nature"></img>
          <h2>Circular economy</h2>
        </div>

        <div className='flex column'>
          <img src="https://i.ibb.co/Wp4Qk3Jd/ep-phone.png" height='70px' alt="phone"></img>
          <h2>Available 7/7</h2>
        </div>

        <div className='flex column'>
          <img src="https://i.ibb.co/ccJmjB7R/bi-truck.png" height='70px' alt="truck"></img>
          <h2>Worldwide deliveries</h2>
        </div>

      </section>

      <section id="main-footer" className='flex two justify-center'>

          <div className='text-center w-30'>
            <div>
                <h2>Contact</h2>
                <p><em>Blablabla</em></p>
            </div>

            <div>
              <p>email@email.fr</p>
              <p>+331 0203 0405</p>
              <p>Jaures</p>
            </div>

            <div>
              Etsy - FB - Insta
            </div>

          </div>

          <div className='text-center w-30'>
            <h2>Informations</h2>

              <p>Conditions générales de vente</p>
              <p>Questions fréquentes</p>
              <p>Informations sur les livraisons</p>
              <p>Mentions légales</p>

          </div>

          <div className='text-center w-30'>
            <h2>Newsletter</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores corporis excepturi modi laborum quibusdam
              architecto, suscipit esse obcaecati doloribus!</p>

            <div>
              <input type="text" placeholder="Votre email"></input>
              <button type='submit'>Je m'inscris</button>
            </div>

          </div>

      </section>

    </footer>
  )
}

export default Footer