import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { API_URL } from '../../../api';

const UpdateArticle = () => {

    // Récupérer les infos
    const [articles, setArticles] = useState([]);
    const [articlesCopy, setArticlesCopy] = useState([]);
    const [filter, setFilter] = useState();

    useEffect(() => {

        const fetchArticles = async () => {

            try{
                const { data, status } = await axios.get(`${API_URL}/lv/articles/new`);
                if(status === 200) {
                    setArticles(data)
                    setArticlesCopy(data)
                }
            }
            catch(error){
                console.log(error.message)
            }

        }

        fetchArticles();

    }, []);


    // Les styles
    const red = {
        backgroundColor:  " rgba(253, 130, 130, 0.84)",
        color: "rgb(212, 0, 0)",
        border: "1px solid rgba(182, 0, 0, 0.81)",
        padding: "1px 6px",
        borderRadius: "20px"
    }
    const green = {
        backgroundColor: " rgba(112, 192, 112, 0.56)",
        color: "green",
        border: "1px solid rgba(112, 192, 112, 0.75)",
        padding: "1px 6px",
        borderRadius: "20px"
    }
    const option = {
        backgroundColor: "white",
        padding: "5px",
        border: "1px solid rgb(214, 214, 214)"
    }


    // Le handlechange
    const handleChange = () => {
        const { name, value } = event.target;
        setFilter(value);
    }
    useEffect(() => {
        if(filter === "all") {
            setArticles(articlesCopy);
        }
        else if (filter === "onlyAvail") {
            const newList = articlesCopy.filter(item => item.availability === true);
            setArticles(newList)
        }
        else if (filter === "onlyGone") {
            const newList = articlesCopy.filter(item => item.availability === false);
            setArticles(newList)
        }
        else {
            setArticles(articlesCopy);
        }
    }, [filter])



    return (
        <>
        <div style={{ width: "100%", padding: "20px"}}>
            <legend>Je veux voir : </legend>
            <select onChange={handleChange} style={option} name="availability" id="availability">
                <option value={"all"}>Toutes les lampes</option>
                <option value={"onlyAvail"}>Les lampes disponibles</option>
                <option value={"onlyGone"}>Les lampes vendues</option>
            </select>
            <br/>
            <p>Total : {articles.length} produits.</p>

        </div>


        <section className='dashboard-all-articles-container'>

            {articles.map(art => (

                <Link to={{ pathname: `/dashboard/update/${art._id}`}}>
                    <div
                        key={art._id}
                        className='card'>
                        <img src={art.picture.img} alt={art.name} height={250}></img>
                        <p>{art.name}</p>
                        <br/>
                        {art.availability === true ?
                            <p style={green}>Disponible</p>
                            :
                            <p style={red}>Non disponible</p>}

                    </div>
                </Link>
            ))}

        </section>
        </>

    )
}

export default UpdateArticle