import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import arrowToRight from '../../assets/icons/arrow-forward.svg'
import arrowToLeft from '../../assets/icons/arrow-previous.svg'
import gradient from '../../assets/img/gradient.svg'

import { CartContext } from '../../UTILS/contexts/CartContext'

const HomeLatestProducts = () => {

    // Pour la récupération d'articles
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchArticles = async() => {
            try{
                const { data, status } = await axios.get('http://localhost:8000/lv/articles/new')
                if(status === 200) setProduct(data);
            }
            catch(error){
                console.log(error.message)
            }
        }

        fetchArticles();
    }, [])

    // Pour le panier
    const { cart, addItem } = useContext(CartContext);

    // Pour le carroussel
    const [position, setPosition] = useState(0);
    const handleNextClick = () => {

        if (position <= - 1500) {
            setPosition(0);
        }

        else {
            setPosition(prevPosition => {
                return prevPosition - 245;
            })
        }
    };
    const handlePrevClick = () => {

        if(position >= 0) {
            setPosition(0);
        }
        else {
            setPosition(prevPosition => {
                return prevPosition + 245;
            })
        }
    }



  return (

    <section id="latest-products" className='flex justify-center column'>

            <div className='container-of-arrows'>

                <div className='arrow-round'>
                    <img id="previous-arrow" onClick={handlePrevClick} src={arrowToLeft}></img>
                </div>

                <h2>Les nouveautés</h2>

                <div className='arrow-round'>
                    <img id='next-arrow' onClick={handleNextClick} src={arrowToRight}></img>
                </div>
            </div>

            <div id="carroussel">
                {product
                    .slice(0,8)
                    .map((item) => (

                        <Link to={{ pathname: `/products/${item._id}` }}>
                        <div key={item.id} className='card'
                        style={{
                            transform: `translateX(${position}px)`,
                            transition: 'transform 0.3s ease-in-out'
                        }}>

                            <img
                                src={item.picture?.img}
                                width={200}
                                height={200}
                            ></img>

                            <p>
                                <strong>{item.name}</strong>
                            </p>

                            <span>
                                {item.price},00 €
                            </span>
                            <br/>

                            <button onClick={addItem} className='btn5'>Add to cart</button>

                        </div>
                        </Link>
                ))}
            </div>

            <Link to={{ pathname: `/news` }}>
                <button className='btn4'>Toutes les nouveautés
                <img
                        src={gradient}
                        width={500}
                        className='btn-effect'></img>
                </button>
            </Link>

    </section>
  )
}

export default HomeLatestProducts