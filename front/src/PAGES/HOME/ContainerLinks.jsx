import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const ContainerLinks = () => {

  return (

    <>

      <section id="container-links"  className='flex mt-big justify-center'>

        <Link to={{ pathname : `/products`}}>
          <div className=''>
            <img
              src="https://i.ibb.co/r2KVYgP1/erasebg-transformed-1.webp"
              alt="modernist art deco glass lamp"
              width={250}/>
            {/* <button className='btn4'>Voir les nouveautés</button> */}
            <p>Voir les nouveautés</p>
          </div>
        </Link>

        <Link to={{ pathname : `/products`}}>
          <div className=''>
          {/* <button className='btn4'>Voir les petits prix</button> */}
          <p>Voir les petits prix</p>

            <img
              src="https://i.ibb.co/DfhtSdnb/erasebg-transformed-3.webp"
              alt="vintage mid-century rockabilly lamp"
              width={250}/>
          </div>
        </Link>


        {/* <div id='metal-card' className='card'>
          <button className='btn4'>
            Voir nos lampes en métal
          </button>
          <div class='color-block'></div>
        </div>

        <div id='glass-card' className='card'>
          <button className='btn4'>Voir nos lampes en verre</button>
          <div class='color-block'></div>
        </div>

        <div id='news-card' className='card'>
          <button className='btn4'>Voir nos nouveautés</button>
          <div class='color-block'></div>
        </div> */}

      </section>

    </>
  )
}

export default ContainerLinks