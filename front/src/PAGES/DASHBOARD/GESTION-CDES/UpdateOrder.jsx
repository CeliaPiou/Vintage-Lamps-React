import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import AXIOS_INSTANCE from '../../../UTILS/services/AxiosInstance'

const UpdateOrder = () => {

  // Récupérer la commande en question
  const params = useParams();
  const navigate = useNavigate()
  const { id } = params;
  const [ order, setOrder ] = useState([]);
  useEffect(() => {
    const fetchOrder = async () => {
      try{
        const {data, status} = await AXIOS_INSTANCE.get('http://localhost:8000/lv/orders/'+ id)
        if(status===200) {
          setOrder(data)
        }
      }
      catch(error){
        console.log("Error: ", error.message)
      }
    }
    fetchOrder();
  }, [])

  // Créer un tableau d'Etat pour stocker les nouvelles infos
  const [orderModified, setOrderModified] = useState(false);
  useEffect(() => {
      if (order) {
        setOrderModified({
              price: order.price || '',
              isShipped: order.isShipped || false,
              articles: order.articles || [],
              user: order.user || '',
              deliveryType: order.deliveryType || false,
          });
      }
  }, [order]);



   // -- HandleChange
    const handleChange = event => {
      const { name, value } = event.target;
      setOrderModified((prev) => ({
        ...prev, [name]: value
      }))
  };

  // -- HandleSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(id)

    try{
      const response = await AXIOS_INSTANCE.put("http://localhost:8000/lv/orders/update/"+id, orderModified);
      alert("Commande modifiée");
    }
    catch(error) {
      console.log("Error : ", error.message)
    }
  }

  // -- Pour le retour en arrière
  const handleReturn = async (event) => {
    navigate('/dashboard');
}



  return (

    <section id="update-order">

      <h2>Modifier une commande</h2>

      <form onSubmit={handleSubmit}>
        <legend htmlFor='sort-by'>
            Statut de la commande :
        </legend>
        <select name="isShipped" id="isShipped" onChange={handleChange}>
            <option value={false}>En attente d'expédition</option>
            <option value={true}>Commande remise au transporteur / en main propre</option>
        </select>

        <div className='container-buttons'>
          <button type='submit' className='btn5'>Mettre à jour</button>
          <button type="button" onClick={handleReturn} className='btn5'>Revenir en arrière</button>
        </div>

        <div className='container-recap'>
          <p>Commandée par {order.user}, le {order.createdAt}
            <br/>
            Montant total : {order.price},00€
          </p>
        </div>


        <div className='container-article-order'>
          {order.articles?.map((art) => (
            <div key={art._id}>
              <img src={art.picture?.img} alt=""></img>
              <p>{art.name}, {art.price},00 €</p>
            </div>

          ))}


        </div>

      </form>

    </section>
  )
}

export default UpdateOrder