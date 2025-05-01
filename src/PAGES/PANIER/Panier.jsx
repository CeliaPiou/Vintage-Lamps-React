import React from 'react'
import './style.scss'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../UTILS/contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import AXIOS_INSTANCE from '../../UTILS/services/AxiosInstance'

const Panier = () => {

    const { cart, removeItem, clearCart } = useContext(CartContext);
    const [ total, setTotal ] = useState(0);
    const navigate = useNavigate();


    // Calcul du prix
    useEffect(() => {
        const fetchPrices =  () => {
            let allPrices = 0;
            cart.map((item) => {
                allPrices += item.price
            });
            setTotal(allPrices)
        };

        fetchPrices();

    }, [cart])

    // Validation de la commande, TBR avec paiement later
    const handleSubmit = async () => {

        try{

            const orderData = {
                price: total,
                articles: cart.map(item => item._id)
            }
            const response = await AXIOS_INSTANCE.post('http://localhost:8000/lv/orders/add', orderData);
            alert('Commande validée !');
        }
        catch(error){
            console.error('Error:', error);
        }

        navigate('/order-approuved');
    }



  return (

    <section id="cart-container">

        <h2><strong>My Cart</strong></h2>

        {/* Apparition des éléments si le cart est rempli */}

        {cart.length >= 1 ?

        <>
            {cart.map((cartItem) => (

                <div key={cartItem._id} className='cart-item'>
                    <img width={150} src={cartItem.picture?.img} alt={cartItem.name}></img>
                    <p>1 x <strong>{cartItem.name}</strong></p>
                    <p>{cartItem.price},00 €</p>
                    <button id='remove-item-cart' onClick={() => removeItem(cartItem._id)} type='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </button>
                </div>

            ))}

            <div>
                <h3>Sous-total</h3>
                <p>{total},00 €</p>
            </div>

        </>
        :
        <p>Your cart is empty !</p>}


        {/* Apparition des boutons si le cart est rempli, sinon les suggestions */}

        {cart.length >= 1 ? (
        <div className='button-container'>
            <button className='btn4' onClick={() => handleSubmit()} type='submit'>Valider le panier</button>
            <button className='btn4' onClick={() => clearCart()} type='button'>Vider le panier</button>
        </div>
        ) : (
        <h3>+ <strong>You'll surely like these</strong> +</h3>
        )}

        // Mettre un carroussel ici


    </section>
  )
}

export default Panier