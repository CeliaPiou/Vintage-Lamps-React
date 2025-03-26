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
          <img
            // src="https://i.ibb.co/LhP98B1p/erasebg-transformed-3-1.png"
            src="https://i.ibb.co/DfhtSdnb/erasebg-transformed-3.webp"
            // src="https://i.ibb.co/39JXr3wp/erasebg-transformed-2.webp"
            alt="vintage mid-century rockabilly lamp"
            width={250}/>
          <button className='btn4'>Metal shade lamps</button>
        </div>


        {/* <div id='metal-card' className='card'>
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
        </div> */}

      </section>

    </>
  )
}

export default ContainerLinks