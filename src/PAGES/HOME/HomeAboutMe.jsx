import React from 'react'

const HomeAboutMe = () => {

  return (

    <div>
        <section id='home-about-me'>

            <div>
                <h2>A propos</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quam pariatur fugiat veritatis. Consectetur tenetur, aut
                    praesentium velit ducimus quia nemo fugit. </p>
                <button className='btn1'>En savoir plus</button>
            </div>

        </section>

        <section id="home-about-me-footer" className='flex column text-center container w-50 justify-center'>

            <h2>Respect et tradition</h2>
            <p>Some of these lamps are one hundred years old and over
            (a time when planned obsolescence didn't mean anything)
            and will last just as long or longer if they are properly taken care of.</p>

        </section>
    </div>


  )
}

export default HomeAboutMe