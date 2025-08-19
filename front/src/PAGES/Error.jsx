import React from 'react'
import Carrousel from '../COMPONENTS/TEMPLATES/Carrousel'
import Error404 from './../assets/img/error404.png'


const Error = () => {
  return (
    <>
        <h2><strong>ERROR 404</strong></h2>
        <strong>Cette page n'existe pas ou n'est plus disponible... !</strong>
        <br/>
        <img src={Error404} alt="Error 404"/>

        <h3>+ <strong>You'll surely like these</strong> +</h3>
        <Carrousel/>
    </>
  )
}

export default Error