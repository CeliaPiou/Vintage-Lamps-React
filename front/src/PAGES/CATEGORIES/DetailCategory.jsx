import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

import { CartContext } from '../../UTILS/contexts/CartContext'
import AXIOS_INSTANCE from '../../UTILS/services/AxiosInstance'

import './style.scss'
import { API_URL } from './../../api';

const DetailCategory = () => {

    // Récupération de l'ID
    const params = useParams();
    const { id } = params;

    // Récupération de la catégorie avec l'ID

    const [ category, setCategory ] = useState([]);
    useEffect(() => {

        const fetchCat = async () => {
            try {
                const { data, status } = await AXIOS_INSTANCE.get(`${API_URL}/lv/category/${id}`);
                if(status === 200) {
                    setCategory(data)
                }
            }
            catch(error) {
                console.log("Error with fetching the category:", error.message)
            }
        };

        fetchCat();
    }, [])

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

    // Utilisation du cart
    const { addItem } = useContext(CartContext)


    return (

        <section id='container-of-articles'>

            <h2>{category.name}</h2>
            <strong>{category.articles?.length} produit(s).</strong>

            <div id='list-articles'>
                {category.articles?.map(item => (
                    <div className="cardy"
                    id={item._id}
                    key={item._id}
                    onMouseEnter={() => beCard(item._id)}
                    onMouseLeave={() => beCardy(item._id)}>

                        <Link to={{ pathname: `/products/${item._id}` }}>
                            <img src={item.picture?.img}
                                alt={item.name}
                                width={200}
                                height={220}></img>

                            <p className='p-name'><strong>{item.name}</strong></p>
                            <p><span className='p-brand'>{item.brand} </span>
                            <span className='p-price'>- {item.price},00 €</span></p>
                        </Link>

                        <button onClick={() => {addItem(item)}} className='btn5'>Add to cart - {item.price},00 €</button>
                    </div>
                ))}
            </div>


        </section>

    )
}

export default DetailCategory