import React, { useEffect, useState } from 'react'
import arrowToRight from '../../assets/icons/arrow-forward.svg'
import arrowToLeft from '../../assets/icons/arrow-previous.svg'

const HomeLatestProducts = () => {

    const [product, setProduct] = useState([
        {
            id: 1,
            name: `HC signed - Mushroom lamp art deco modernist bauhaus`,
            price: `150`,
            img: `https://i.etsystatic.com/16538771/r/il/5f95da/6583041901/il_794xN.6583041901_cth2.jpg`
        },
        {
            id: 2,
            name: `Vintage antique mid century lamp`,
            price: `139`,
            img: `https://i.etsystatic.com/16538771/r/il/43795e/6509798875/il_794xN.6509798875_q8to.jpg`
        },
        {
            id: 3,
            name: `DEGUE - Art déco vintage wall lamp`,
            price: `199`,
            img: `https://i.etsystatic.com/16538771/r/il/ccefde/6658406597/il_794xN.6658406597_72p0.jpg`
        },
        {
            id: 4,
            name: `DEGUE - Vintage art deco table`,
            price: `175`,
            img: `https://i.etsystatic.com/16538771/r/il/8f6f0b/6553232574/il_794xN.6553232574_oa09.jpg`
        },

    ]
    );

    const [position, setPosition] = useState(0);

    // const carroussel = document.getElementById('carroussel');

    // useEffect(() => {

    //     const rightArrow = document.getElementById('next-arrow');

    //     rightArrow ? rightArrow.addEventListener('click', () => {

    //         setPosition(prevPosition => prevPosition + 300);
    //         console.log(position)

    //     })
    //     : console.log("Pas de flèche")


    // }, [])

    const handleNextClick = () => {
        setPosition(prevPosition => {
            return prevPosition - 250;
        });
    };

    const handlePrevClick = () => {
        setPosition(prevPosition => {
            return prevPosition + 250
        })
    }


  return (

    <section id="latest-products" className=' mt-small flex justify-center column'>

            <h2>Les nouveautés</h2>

            <div className='container-of-arrows'>
                <div className='arrow-round'>
                    <img id="previous-arrow" onClick={handlePrevClick} src={arrowToLeft}></img>
                </div>
                <div className='arrow-round'>
                    <img id='next-arrow' onClick={handleNextClick} src={arrowToRight}></img>
                </div>
            </div>

            <div
                className='flex justify-center'
                id="carroussel"
                >

                {product.map((item) => (

                    <div key={item.id} className='card'
                    style={{
                        transform: `translateX(${position}px)`,
                        transition: 'transform 0.3s ease-in-out'
                    }}>

                        <img
                            src={item.img}
                            width={200}
                            height={200}
                        ></img>

                        <p>
                            {item.name}
                            <br/>
                            {item.price},00 €
                        </p>


                    </div>

                ))}

            </div>

            <button className='mt-small btn4'>Voir plus?</button>

    </section>
  )
}

export default HomeLatestProducts