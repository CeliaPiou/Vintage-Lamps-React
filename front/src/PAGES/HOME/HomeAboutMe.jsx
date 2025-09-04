import React from 'react'
import { Link } from 'react-router-dom'
import gradient from '../../assets/img/gradient.svg'

const HomeAboutMe = () => {

  return (

    <>
        <section id='home-about-me' className='mt-big'>

            <div>
                <h2>A propos</h2>
                <p> Notre passion : raviver la beauté des lampes anciennes et faire découvrir aux amateurs de lumière et de design ces pièces uniques qui traversent le temps, du verre artisanal aux métaux travaillés, en passant par les chefs-d’œuvre des maîtres verriers. </p>
                <Link to={{pathname: `/about`}}>
                    <button className='btn4'>En savoir plus
                        <img
                            src={gradient}
                            alt=""
                            width={500}
                            className='btn-effect'></img>
                    </button>
                </Link>
            </div>

        </section>

        <section id="home-about-me-footer" className='w-100 three flex justify-center'>

            <div className='text-center w-50'>
                <h2>Respect et tradition</h2>
                <p>Certaines de ces lampes ont cent ans et plus (à une époque où l’obsolescence programmée n’avait aucun sens) et dureront tout autant, voire plus, si elles sont correctement entretenues.</p>
            </div>

        </section>
    </>


  )
}

export default HomeAboutMe