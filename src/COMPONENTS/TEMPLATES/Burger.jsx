import React, { useEffect } from 'react'
import './style.scss'
import '../../var.scss'
import { Link } from 'react-router-dom'

const Burger = () => {

    const blackBlur = document.getElementById('blur');

    blackBlur.addEventListener('click', () => {
        closeBurgerMenu();
    })


    useEffect(() => {
        const hiddenNavigation = document.getElementById("hidden-nav-burger")
        hiddenNavigation.classList.add('hidden')
        hiddenNavigation.classList.remove('visible');

    }, [])

    function openBurgerMenu() {
        const hiddenNavigation = document.getElementById("hidden-nav-burger")
        hiddenNavigation.classList.remove('hidden');
        hiddenNavigation.classList.add('visible');

        blackBlur.classList.add("blur-visible");
        blackBlur.classList.remove("blur-hidden");

    }

    function closeBurgerMenu() {
        const hiddenNavigation = document.getElementById("hidden-nav-burger")
        hiddenNavigation.classList.add('hidden')
        hiddenNavigation.classList.remove('visible');

        blackBlur.classList.remove("blur-visible");
        blackBlur.classList.add('blur-hidden')
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
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
            </button>

            <ul id="hidden-nav-burger" className="flex column">
                    <svg
                        width={30}
                        onClick={()=> closeBurgerMenu()}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
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