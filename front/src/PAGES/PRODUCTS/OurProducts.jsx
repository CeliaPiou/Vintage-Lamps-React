import './style.scss'

import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import { CartContext } from '../../UTILS/contexts/CartContext';
import { API_URL } from '../../api';

const OurProducts = () => {

    const { cart, addItem } = useContext(CartContext);

    const [product, setProduct] = useState([]);
    const location = useLocation(); // Récupère l'URL

    useEffect(() => {
        const fetchArticles = async() => {
            try{

                const urlToFetch =  `${API_URL}/lv/articles/all`;

                const { data, status } = await axios.get(urlToFetch);
                if(status === 200) {
                    setProduct(data);
                    setInitialProducts(data);
                }
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

    // Gestion des filtres
    // -- Etats pour gérer les choix
    const [initialProducts, setInitialProducts] = useState(product);
    const [sortBy, setSortBy] = useState("plus-recent");


    // -- HandleChange
    const handleChange = event => {
        const { name, value } = event.target;
        setSortBy(value);
    }

    // -- Fonction pour appliquer les choix
    const handleFilter = event => {
        event.preventDefault();

        // Si le choix est : Du plus ancien au plus récent
        if(sortBy == "plus-ancien") {
            const filtered = [...product].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); // Je trie
            setProduct(filtered)
        }

        // Si le choix est : Prix Croissant
        else if(sortBy == "prix-croissant") {
            const filtered = [...product].sort((a,b ) => a.price - b.price) // Je trie
            setProduct(filtered)
        }

        // Si le choix est : Prix Décroissant
        else if(sortBy == "prix-decroissant") {
            const filtered = [...product].sort((a,b ) => b.price - a.price) // Je trie
            setProduct(filtered)
        }

        // Sinon (donc, choix le plus récent au plus ancien)
        else {
            const filtered = [...product].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Je trie
            setProduct(filtered)
        }

    }


    return (

    <main>

        <section className='w-100' id="filter-section">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg>

            <div id='hidden-filter-section'>

                <form onChange={handleChange}>
                    <fieldset>
                        <legend htmlFor='sort-by'>
                            Trier par...
                        </legend>
                        <select name="sort-by" id="sort-by">
                            <option value="plus-recent">Les plus récentes</option>
                            <option value="plus-ancien">Les plus anciennes</option>
                            <option value="prix-croissant">Prix croissant</option>
                            <option value="prix-decroissant">Prix décroissant</option>
                        </select>
                    </fieldset>

                    <button className='btn4 mt-small' onClick={handleFilter}>Appliquer les filtres</button>

                </form>

            </div>
        </section>

        <section id="latest-products" className='mt-small container flex justify-center'>

            {product.map((prod) => (
                <div className="cardy"
                id={prod._id}
                key={prod._id}
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