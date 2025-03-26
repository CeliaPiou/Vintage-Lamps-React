import React from 'react'
import './style.scss'

const ContainerLinks = () => {
  return (

    <>

      <section id="container-links"  className='flex mt-big justify-center'>

        <div className='card-cta'>
          <img
            src="https://i.ibb.co/r2KVYgP1/erasebg-transformed-1.webp"
            alt="modernist art deco glass lamp"
            width={250}/>
          <button className='btn4'>Glass shade lamps</button>
        </div>

        <div className='card-cta'>
        <button className='btn4'>Metal shade lamps</button>

          <img
            src="https://i.ibb.co/DfhtSdnb/erasebg-transformed-3.webp"
            alt="vintage mid-century rockabilly lamp"
            width={250}/>
        </div>


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