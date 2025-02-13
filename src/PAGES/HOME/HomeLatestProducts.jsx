import React, { useState } from 'react'

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
    )


  return (

    <section id="latest-products" className='container flex justify-center column'>

        <div>

        <h2>Les nouveautés</h2>

            <div className='flex justify-center' id="carroussel">

                {product.map((item) => (

                    <div key={item.id} className='card'>

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

        </div>

        <button className='btn3'>Voir plus?</button>


    </section>
  )
}

export default HomeLatestProducts