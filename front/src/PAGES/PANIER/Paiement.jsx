import React                    from 'react'
import { Link }                 from 'react-router-dom'


const Paiement = () => {

  return (
    <>
        <h2>Votre commande</h2>

        <section>

          <p>Merci pour votre commande !
            Nous reprendrons contact avec vous dans les plus brefs délais.
          </p>
          <Link to={{pathname: `/`}}>
            <button className='btn5'>Revenir à l'accueil</button>
          </Link>

        {/*  deliveryType boolean, deliveryaddress string, payment boolean */}

        </section>
    </>
  )
}

export default Paiement