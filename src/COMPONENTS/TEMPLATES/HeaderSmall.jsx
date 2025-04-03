import React, { useState } from 'react'
import './style.scss'
import '../../var.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Burger from './Burger'
import gradient from '../../assets/img/gradient.svg'



const Header = () => {

    const [width, setWidth] = useState('300px');

    const handleClick = () => {
        setWidth('500px');
    };

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

        {/* <nav id="secondary-nav" class="w-100 flex">
                    <div className='w-100 flex'>
                        <div id="search-input">
                            <input
                                type='search'
                                placeholder='Research a lamp...'
                                onClick={handleClick}
                                style={{
                                    width: width,
                                    transition: 'width 0.5s ease', // Transition fluide de la largeur
                                    padding: '8px',
                                    fontSize: '14px'
                                    }}
                                ></input>
                            <button type="submit" title="rechercher un produit"><svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
                        </div>
                    </div>


                        <ul>
                            <li>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                                </a>
                            </li>

                            <Link to={{ pathname: `/connexion` }}>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                            </li>
                            </Link>

                            <li>
                                <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>                                </a>
                            </li>
                        </ul>
        </nav> */}

        <section id="hero-section-small">

            < Burger />

            <nav id="primary-nav" className='flex justify-space-between'>
                <Link to={{ pathname: `/` }}>
                <ul>
                    <li id="logo-vl">
                        Vintage Lamp
                    </li>
                </ul>
                </Link>


                <ul className='flex'>
                    <Link to={{ pathname: `/products` }}><li>Nos Produits</li></Link>
                    <Link to={{ pathname: `/news` }}><li>Nouveautés</li></Link>
                    <Link to={{ pathname: `/about` }}><li>A propos</li></Link>
                    <Link to={{ pathname: `/contact` }}><li>Contact</li></Link>

                    <Link to={{ pathname: `/dashboard`}}>
                        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M80-120v-80h800v80H80Zm40-120v-280h120v280H120Zm200 0v-480h120v480H320Zm200 0v-360h120v360H520Zm200 0v-600h120v600H720Z"/></svg></li>
                    </Link>

                    <Link to={{ pathname: `/connexion` }}>
                        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg></li>
                    </Link>

                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg></li>
                </ul>
            </nav>

        </section>

    </header>
  )
}

export default Header