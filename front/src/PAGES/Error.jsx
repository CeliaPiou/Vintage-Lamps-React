import React from 'react'
import Carrousel from '../COMPONENTS/TEMPLATES/Carrousel'
import Error404 from './../assets/img/error404.png'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <section className='w-70 text-center'>
        <h2><strong>ERROR 404</strong></h2>
        <strong>Il semblerait que cette page n'existe pas ou ne soit plus disponible... !</strong>
        <br/>

        <Link to={{pathname:`/`}} >
          <button className='btn4' style={{ marginTop: "25px"}}>Retourner à l'accueil</button>
        </Link>
        <img style={{ marginTop: "25px"}} width={500} src={Error404} alt="Error 404"/>

        {/* <h3>+ <strong>You'll surely like these</strong> +</h3> */}
        {/* <Carrousel/> */}
    </section>
  )
}

export default Error