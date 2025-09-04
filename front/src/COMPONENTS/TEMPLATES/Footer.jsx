import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (

    <footer className='w-100'>

      <section id="pre-footer" className='mt-small flex one justify-center pt-small'>

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
                <p><em>Besoin d’aide ou simplement envie d’échanger sur nos trouvailles vintage ? Contactez-nous !</em></p>
            </div>

            <div>
              <p>leydier2020@email.fr</p>
              <p>+331 0203 0405</p>
              <p>Métro Jaures, Paris</p>
            </div>

            <div>
            {/* <!-- Etsy --> */}
            <a href="https://www.etsy.com/shop/LampesVintages?ref=l2-about-shopname&from_page=listing" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 512 512">
                <circle cx="256" cy="256" r="256" fill="#F16521"/>
                <text x="50%" y="60%" text-anchor="middle" fill="white" font-size="200" font-family="Arial" dy=".35em">E</text>
              </svg>
            </a>

              {/* <!-- Facebook --> */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="path/to/facebook-logo.png" alt="Lampes Vintage sur Facebook" width="32" height="32"/>
              </a>

              {/* <!-- Instagram --> */}
              <a href="https://www.instagram.com/lampesvintages/" target="_blank" rel="noopener noreferrer">
                <img src="path/to/instagram-logo.png" alt="Lampes Vintage sur Instagram" width="32" height="32"/>
              </a>
            </div>

          </div>

          <div className='text-center w-30'>
            <h2>Informations</h2>

              <Link to={{pathname: `/conditions-generales`}}>
                <p>Conditions générales de vente</p>
              </Link>
              <Link to={{pathname: `/questions-frequentes`}}>
                <p>Questions fréquentes</p>
              </Link>
              <Link to ={{pathname: `/mentions-legales`}}>
                <p>Mentions légales</p>
              </Link>

          </div>

          <div className='text-center w-30'>
            <h2>Newsletter</h2>
            <p>Découvrez en avant-première nos lampes anciennes rénovées
              et laissez-vous inspirer par le charme du design vintage</p>

            <div>
              <label htmlFor='email'>Je m'inscris :</label>
              <input id='email' name="email" type="email" placeholder="Votre email"></input>
              <button type='submit'>Je m'inscris</button>
            </div>

          </div>

      </section>

    </footer>
  )
}

export default Footer