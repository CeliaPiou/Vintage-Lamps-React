import React from 'react'

import gradient from '../../assets/img/gradient.svg'

const HomeAboutMe = () => {

  return (

    <>
        <section id='home-about-me' className='mt-big'>

            <div>
                <h2>A propos</h2>
                <p>  </p>
                <button className='btn4'>En savoir plus
                    <img
                        src={gradient}
                        width={500}
                        className='btn-effect'></img>
                </button>
            </div>

        </section>

        <section id="home-about-me-footer" className='w-100 three flex justify-center'>

            <div className='text-center w-50'>
                <h2>Respect et tradition</h2>
                <p>Some of these lamps are one hundred years old and over
                (a time when planned obsolescence didn't mean anything)
                and will last just as long or longer if they are properly taken care of.</p>
            </div>

        </section>
    </>


  )
}

export default HomeAboutMe