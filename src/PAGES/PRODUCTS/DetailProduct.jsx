import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DetailProduct = () => {

    const params = useParams();
    const { id } = params;

    const [ article, setArticle ] = useState([])
    const [ bigPicture, setBigPicture ] = useState("")


    useEffect(() => {

        const fetchArticle = async() => {
            try{
                const { data, status } = await axios.get(`http://localhost:8000/lv/articles/${id}`);
                if(status === 200) {
                    setArticle(data)
                    setBigPicture(data.picture?.img)
                }

            }
            catch(error){
                console.log('Error : ', error.message)
            }
        }

        fetchArticle();
    }, [])

    const handleChangePic = (imgSrc) => {
        setBigPicture(imgSrc);
    }

    return (
        <section id='detail-product'>

            <div id="detail-product-left">

                <div id="images-container-small">
                {article.picture?.video && (
                    <video style={{ display: "block" }} width="600" height="400">
                        <source src={article.picture?.video} type="video/mp4" />
                        <source src={article.picture?.video} type="video/webm" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                    )}
                    {article.picture?.img && <img src={article.picture.img} alt="" onClick={() => handleChangePic(article.picture.img)} />}
                    {article.picture?.img1 && <img src={article.picture.img1} alt="" onClick={() => handleChangePic(article.picture.img1)} />}
                    {article.picture?.img2 && <img src={article.picture.img2} alt="" onClick={() => handleChangePic(article.picture.img2)} />}
                    {article.picture?.img3 && <img src={article.picture.img3} alt="" onClick={() => handleChangePic(article.picture.img3)} />}
                    {article.picture?.img4 && <img src={article.picture.img4} alt="" onClick={() => handleChangePic(article.picture.img4)} />}
                </div>
                <div id="image-container-big">
                    <img src={bigPicture} alt={bigPicture} />
                </div>

            </div>

            <div id="detail-product-right">

                <h2>{article.name}</h2>
                <h3>{article.brand}</h3>
                <h4>{article.price},00 E</h4>


                <p>{article.description}</p>
                <p>Materials: {article.material}</p>
                <p>Colors: {article.color}</p>
                <p>From: {article.period}</p>

                <button className='btn5'>Add to cart</button>


            </div>

        </section>
    )
}

export default DetailProduct