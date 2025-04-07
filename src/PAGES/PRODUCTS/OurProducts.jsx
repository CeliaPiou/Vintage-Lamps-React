import './style.scss'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import useCart from '../../COMPONENTS/useCart'


const OurProducts = () => {

    const { cart, addItem } = useCart();

        const [product, setProduct] = useState([]);
        const location = useLocation(); // Récupère l'URL

        useEffect(() => {
            const fetchArticles = async() => {
                try{
                    // Change l'URL à récupérer selon l'url utilisé
                    const urlToFetch = location.pathname === "/news"
                    ? "http://localhost:8000/lv/articles/new"
                    : "http://localhost:8000/lv/articles/all";

                    const { data, status } = await axios.get(urlToFetch);
                    if(status===200) setProduct(data)
                }
                catch(error){
                    console.log(error.message)
                }
            }

            fetchArticles();
        }, [location.pathname])

        // Changement de styles
        function beCard(id) {
            let div = document.getElementById(id);
            div.classList.toggle('cardy');
            div.classList.toggle('card');
        };
        function beCardy(id) {
            let div = document.getElementById(id);
            div.classList.toggle('card');
            div.classList.toggle('cardy');
        };


    return (

    <main>

        <nav id="products-nav">
            <ul>
                <li>Tous les Produits</li>
                <li>Type de Produit</li>
            </ul>
        </nav>

        <section id="latest-products" className='mt-big container flex justify-center'>

            {product.map((prod) => (
                <div className="cardy"
                id={prod._id}
                onMouseEnter={() => beCard(prod._id)}
                onMouseLeave={() => beCardy(prod._id)}>

                    <Link to={{ pathname: `/products/${prod._id}` }}>
                        <img src={prod.picture?.img}
                            alt={prod.name}
                            width={200}
                            height={220}></img>

                        <p className='p-name'><strong>{prod.name}</strong></p>
                        <p><span className='p-brand'>{prod.brand} </span>
                        <span className='p-price'>- {prod.price},00 €</span></p>
                    </Link>

                    <button onClick={() => {addItem(prod)}} className='btn5'>Add to cart - {prod.price},00 €</button>
                </div>

            ))}

        </section>

    </main>


    )
}

export default OurProducts