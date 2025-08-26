import React from 'react'
import { useEffect, useState } from 'react'
import AXIOS_INSTANCE from '../../UTILS/services/AxiosInstance'
import { Link } from 'react-router-dom'
import './style.scss'
import { API_URL } from './../../api';


const OurCategories = () => {

    // Récupérer les catégories existantes ET visibles, au chargement de la page
    const [ cat, setCat ] = useState([]);
    useEffect(() => {

        const fetchCategories = async () => {
            try {
                const { data, status } = await AXIOS_INSTANCE.get(`${API_URL}/lv/category/get`);
                if(status === 200) {
                    setCat(data)
                }
            }
            catch(error) {
                console.log("Error : ", error.message)
            }
        };
        fetchCategories();

    }, []);






    return (
        <section id='container-of-categories'>
            {cat.map(c => (
                <Link to={{ pathname: `/categories/${c._id}` }}>

                    <div key={c._id}>
                        <img src={c.image}  alt=""/>
                        <h2>{c.name}</h2>
                        <p>{c.articles.length} Lampes.</p>
                    </div>

                </Link>
            ))}
        </section>
    )
}

export default OurCategories