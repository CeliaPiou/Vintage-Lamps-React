import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

// Les styles
import './style.scss'
import '../../var.scss'
import gradient from '../../assets/img/gradient.svg'

// Les composants
import Burger from './Burger'
import CartAlert from './CartAlert'

// Contextes
import { AuthContext } from '../../UTILS/contexts/AuthContext'


const Header = () => {

    // Afficher/Gérer la connexion :
    const { logout, auth } = useContext(AuthContext);

    // Afficher/retirer le déroulé du panier
    const cartContentVisble = () => {
        const containerCart = document.getElementById('container-cart');
        containerCart.classList.add('container-cart-visible');
    };
    const cartContentInvisible = () => {
        const containerCart = document.getElementById('container-cart');
        containerCart.classList.remove('container-cart-visible');
    };

    // Gérer la permanence de la barre de nav selon le scroll
    useEffect(() => {
        const navbar = document.getElementById('primary-nav');

        window.addEventListener("scroll", function(){
            if ( document.body.scrollTop >= 25 || document.scrollingElement.scrollTop >= 25 || document.documentElement.scrollTop >= 25 ){
                navbar.classList.add('fixed');
            } else {
                navbar.classList.remove('fixed')
            }
        })
    })

  return (
    <header>

        < CartAlert onMouseOver={()=> {cartContentVisble()}}/>

        <section id="hero-section">

            < Burger />

            <nav id="primary-nav" className='flex justify-space-between'
                onMouseLeave={() => cartContentInvisible()}
            >
                <Link to={{ pathname: `/` }}>
                <ul>
                    <li id="logo-vl">
                        Vintage Lamp
                    </li>
                </ul>
                </Link>

                <ul className='flex'>
                    <Link to={{ pathname: `/products` }}><li>Nos Produits</li></Link>
                    <Link to={{ pathname: `/categories` }}><li>Nos catégories</li></Link>
                    <Link to={{ pathname: `/about` }}><li>A propos</li></Link>
                    <Link to={{ pathname: `/contact` }}><li>Contact</li></Link>

                {auth?.others?.role=="admin"?
                <>
                    <Link to={{ pathname: `/dashboard`}}>
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M80-120v-80h800v80H80Zm40-120v-280h120v280H120Zm200 0v-480h120v480H320Zm200 0v-360h120v360H520Zm200 0v-600h120v600H720Z"/></svg></li>
                    </Link>
                </>
                :
                ""
                }


                {!auth ?

                    <Link to={{ pathname: `/connexion` }}>
                        <li className='drop-drown'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                        </li>
                    </Link>

                :
                <>
                    <li className='drop-drown'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>

                        <div className='dropdown-child'>
                            <p>Bonjour, {auth.others?.username}</p>
                            <button className="btn5" onClick={logout}>Se déconnecter</button>
                            {auth?.others?.role!="admin"?
                            <>
                                <Link to={{ pathname: `/account` }}>
                                    <button className='btn5'>Mon compte</button>
                                </Link>
                            </>
                            :
                            ""
                            }
                        </div>
                    </li>
                </>

                }


                    <Link to={{ pathname: `/cart`}}>
                        <li
                        onMouseOver={() => cartContentVisble()}
                        id='cart'
                        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg></li>
                    </Link>



                </ul>
            </nav>

            <div id="hero-section-text" className='flex'>
                <h1 className='typewriter'>Vintage Lamps</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum ea esse dolore! Earum impedit, expedita rerum a
                    delectus ratione officia similique aut dolores eaque
                    voluptatem molestias, voluptatum, eligendi atque dolorum.</p>
                    <button
                    className='btn4'
                    >
                    Discover our lamps
                    <img
                        src={gradient}
                        width={500}
                        className='btn-effect'></img>
                    </button>
        </div>

        </section>

    </header>
  )
}

export default Header