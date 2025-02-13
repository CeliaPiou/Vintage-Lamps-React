import React from 'react'
import './style.scss'

const ContainerLinks = () => {
  return (

    <>

      <section id="container-links" className='flex justify-center container'>

        <div id='metal-card' className='card'>
          <button className='btn3'>
            Voir nos lampes en métal
          </button>
          <div class='color-block'></div>
        </div>

        <div id='glass-card' className='card'>
          <button className='btn3'>Voir nos lampes en verre</button>
          <div class='color-block'></div>
        </div>

        <div id='news-card' className='card'>
          <button className='btn3'>Voir nos nouveautés</button>
          <div class='color-block'></div>
        </div>

      </section>

    </>
  )
}

export default ContainerLinks