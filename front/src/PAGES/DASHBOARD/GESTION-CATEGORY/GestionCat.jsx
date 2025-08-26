import React from 'react'
import { useEffect, useState } from 'react'
import AjouterCat from './AjouterCat'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../api';

const GestionCat = () => {

    // Etat pour stocker si on veut ajouter une nouvelle catégorie
    const [ addCat, setAddCat ] = useState(false);
    // Etat pour stocker les caté
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const { data, status } = await axios(`${API_URL}/lv/category/all`);
                if(status === 200) {
                    setCategories(data);
                }
            }
            catch(error) {
                console.log(error.message)
            }
        }

        fetchCategories();
    }, [addCat])

    const handleAddCat = () => {
        setAddCat(true)
    }

    return (
    <section id='gestion-categories'>

        { addCat ?
        <AjouterCat addCat={addCat} setAddCat={setAddCat} />
        :
        <>
            <strong className="bubble" onClick={() => handleAddCat()}> + Ajouter une catégorie </strong>
            <div id="container-of-cats">
                {categories.map(cat => (

                    <Link to={{ pathname: `/dashboard/update-category/${cat._id}`}}>
                    <div className='one-cat' key={cat._id}>

                            <div className='img-container'>
                                <img src={cat.image} alt=""/>
                            </div>

                            <strong>{cat.name}</strong>
                            <p><em>({cat.articles.length} produits enregistrés.)</em></p>

                    </div>
                    </Link>

                ))}


            </div>
        </>

        }


    </section>
    )
}

export default GestionCat