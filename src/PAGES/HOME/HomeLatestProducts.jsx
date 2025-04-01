import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import arrowToRight from '../../assets/icons/arrow-forward.svg'
import arrowToLeft from '../../assets/icons/arrow-previous.svg'
import gradient from '../../assets/img/gradient.svg'

const HomeLatestProducts = () => {

    // Pour la récupération d'articles
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchArticles = async() => {
            try{
                const { data, status } = await axios.get('http://localhost:8000/lv/articles/all')
                if(status === 200) setProduct(data);
                console.log(product)
            }
            catch(error){
                console.log(error.message)
            }
        }

        fetchArticles();
    }, [])

    // Pour le carroussel
    const [position, setPosition] = useState(0);
    const handleNextClick = () => {

        if (position <= - 100) {
            setPosition(0);
        }

        else {
            setPosition(prevPosition => {
                return prevPosition - 30;
            })
        }
    };
    const handlePrevClick = () => {

        if(position >= 0) {
            setPosition(0);
        }
        else {
            setPosition(prevPosition => {
                return prevPosition + 250;
            })
        }
    }


  return (

    <section id="latest-products" className='flex justify-center column'>

            <h2>Les nouveautés</h2>

            <div className='container-of-arrows'>
                <div className='arrow-round'>
                    <img id="previous-arrow" onClick={handlePrevClick} src={arrowToLeft}></img>
                </div>
                <div className='arrow-round'>
                    <img id='next-arrow' onClick={handleNextClick} src={arrowToRight}></img>
                </div>
            </div>

            <div id="carroussel">
                {product
                    .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0,8)
                    .map((item) => (

                        <Link to={{ pathname: `/products/${item._id}` }}>
                        <div key={item.id} className='card'
                        style={{
                            transform: `translateX(${position}vw)`,
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

                            <button className='btn5'>Add to cart</button>

                        </div>
                        </Link>
                ))}
            </div>
            <Link to={{ pathname: `/products` }}>
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