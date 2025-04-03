import React, { useEffect } from 'react'
import './style.scss'
import '../../var.scss'
import { Link } from 'react-router-dom'

const Burger = () => {

    useEffect(() => {
        const hiddenNavigation = document.getElementById("hidden-nav-burger")
        hiddenNavigation.classList.add('hidden')
        hiddenNavigation.classList.remove('visible');

    }, [])

    function openBurgerMenu() {
        const hiddenNavigation = document.getElementById("hidden-nav-burger")
        hiddenNavigation.classList.remove('hidden');
        hiddenNavigation.classList.add('visible');

        const blackBlur = document.getElementById('blur');
        blackBlur.classList.add("blur-visible");
        blackBlur.classList.remove("blur-hidden");

        blackBlur.addEventListener('click', () => {
            hiddenNavigation.classList.add('hidden')
            hiddenNavigation.classList.remove('visible');
            blackBlur.classList.remove("blur-visible");
            blackBlur.classList.add('blur-hidden');
        })
    }

    function closeBurgerMenu() {
        const hiddenNavigation = document.getElementById("hidden-nav-burger")
        hiddenNavigation.classList.add('hidden')
        hiddenNavigation.classList.remove('visible');

        const blackBlur = document.getElementById('blur');
        blackBlur.classList.remove("blur-visible");
        blackBlur.classList.add('blur-hidden');

    }


  return (

    <>
        <nav id="menu-burger" role="navigation" aria-label="Menu principal">

            <button aria-expanded="true">
                <svg
                    width="30px"
                    aria-hidden="true"
                    focusable="false"
                    onClick={()=> openBurgerMenu()}
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                </svg>
            </button>

            <div>

                <Link to={{ pathname: `/dashboard`}}>
                    <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M80-120v-80h800v80H80Zm40-120v-280h120v280H120Zm200 0v-480h120v480H320Zm200 0v-360h120v360H520Zm200 0v-600h120v600H720Z"/></svg></li>
                </Link>

                <Link to={{ pathname: `/connexion` }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                </Link>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>
            </div>

            <ul id="hidden-nav-burger" className="flex column">
                    <svg
                        width={30}
                        onClick={()=> closeBurgerMenu()}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    <Link to={{ pathname: `/` }}><li>Home</li></Link>
                    <Link to={{ pathname: `/products` }}><li>Nos Produits</li></Link>
                    <Link to={{ pathname: `/products` }}><li>Nouveautés</li></Link>
                    <Link to={{ pathname: `/about` }}><li>A propos</li></Link>
                    <Link to={{ pathname: `/products` }}><li>Petits Prix</li></Link>
                    <Link to={{ pathname: `/contact` }}><li>Contact</li></Link>
            </ul>
        </nav>

        <div aria-hidden="true" className="blur-hidden" id="blur"></div>
    </>

  )
}

export default Burger