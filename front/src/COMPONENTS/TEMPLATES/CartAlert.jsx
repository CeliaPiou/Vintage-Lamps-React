import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'

// Contexte Panier
import { CartContext } from '../../UTILS/contexts/CartContext'

const CartAlert = () => {

    // const [cart, setCart] = useState([])
    const { removeItem, cart, clearCart } = useContext(CartContext);

    // Afficher/retirer le déroulé
    const cartContentVisble = () => {
        const containerCart = document.getElementById('container-cart');
        containerCart.classList.add('container-cart-visible');
    };
    const cartContentInvisible = () => {
        const containerCart = document.getElementById('container-cart');
        containerCart.classList.remove('container-cart-visible');
    };


  return (

    <div className='container-cart' id='container-cart'
    onMouseEnter={() => cartContentVisble()}
    onMouseLeave={() => cartContentInvisible()}
    >
        {cart?.length >= 1 ?
        <>
            {cart.map((item) => (
                <div key={item._id}>
                    <img src={item.picture?.img} alt={item.name} width={50}></img>
                    <span>{item.name} | {item.price},00€</span>
                    <button id='remove-item-cart' className="invisible-button" onClick={() => removeItem(item._id)} type='button'>
                        X
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg> */}
                    </button>
                </div>
            ))}
        </>
        :
        <p>Votre panier est vide</p>
        }
        <Link to={{ pathname: `/cart`}} >
            <button className='btn5'>Voir mon panier</button>
        </Link>

        <button onClick={clearCart} className='btn5'>Vider mon panier</button>
        </div>
  )
}

export default CartAlert