import React, { useEffect, useState } from 'react'
import './style.scss'

const OurProducts = () => {

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
            {
                id: 5,
                name: `HC signed - Mushroom lamp art deco modernist bauhaus`,
                price: `150`,
                img: `https://i.etsystatic.com/16538771/r/il/5f95da/6583041901/il_794xN.6583041901_cth2.jpg`
            },
            {
                id: 6,
                name: `Vintage antique mid century lamp`,
                price: `139`,
                img: `https://i.etsystatic.com/16538771/r/il/43795e/6509798875/il_794xN.6509798875_q8to.jpg`
            },
            {
                id: 7,
                name: `DEGUE - Art déco vintage wall lamp`,
                price: `199`,
                img: `https://i.etsystatic.com/16538771/r/il/ccefde/6658406597/il_794xN.6658406597_72p0.jpg`
            },
            {
                id: 8,
                name: `DEGUE - Vintage art deco table`,
                price: `175`,
                img: `https://i.etsystatic.com/16538771/r/il/8f6f0b/6553232574/il_794xN.6553232574_oa09.jpg`
            }

        ]
        )

        function beCard(id) {
            let div = document.getElementById(id);
            div.classList.toggle('cardy');
            div.classList.toggle('card');
        }

        function beCardy(id) {
            let div = document.getElementById(id);
            div.classList.toggle('card');
            div.classList.toggle('cardy');
        }


    return (

    <main>

        <nav id="products-nav">
            <ul>
                <li>Tous les Produits</li>
                <li>Type de Produit</li>
                <li>Type de Produit</li>
                <li>Type de Produit</li>
                <li>Type de Produit</li>
            </ul>
        </nav>

        <section className='mt-big container flex justify-center'>

            {product.map((prod) => (

                <div className="cardy"
                id={prod.id}
                onMouseEnter={() => beCard(prod.id)}
                onMouseLeave={() => beCardy(prod.id)}>

                    <img src={prod.img}
                        alt={prod.name}
                        width={200}
                        height={200}></img>

                    <p><strong>{prod.name}</strong></p>
                    <p>{prod.price},00 €</p>

                    <button className='btn4'>Add to cart</button>



                </div>

            ))}

        </section>

    </main>


    )
}

export default OurProducts