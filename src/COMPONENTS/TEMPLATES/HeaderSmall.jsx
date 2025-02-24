import React, { useState } from 'react'
import './style.scss'
import '../../var.scss'
import { Link } from 'react-router-dom'

const HeaderSmall = () => {

    const [width, setWidth] = useState('200px');

    const handleClick = () => {
        setWidth('800px');
    }



  return (
    <header>

        <nav id="secondary-nav" class="w-100 flex justify-right">
                    <ul className='flex justify-right'>
                        <li id="search-input">
                            <input
                                type='search'
                                placeholder='Rechercher un produit'
                                onClick={handleClick}
                                style={{
                                    width: width,
                                    transition: 'width 0.5s ease', // Transition fluide de la largeur
                                    padding: '8px',
                                    fontSize: '16px'
                                    }}
                                ></input>
                            <button type="submit" title="rechercher un produit"></button>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-280v-400h280v80H240v80h160v80H240v160h-80Zm360 0v-400h200q33 0 56.5 23.5T800-600v80q0 32-22 54.5T726-440l74 160h-84l-75-160h-41v160h-80Zm80-240h120v-80H600v80Z"/></svg>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
                        </li>
                    </ul>
        </nav>

        <section id="hero-section-smaller">

            <nav id="primary-nav" className='flex justify-space-between'>
                <Link to={{ pathname: `/` }}>
                <ul>
                    <li>Logo</li>
                </ul>
                </Link>


                <ul className='flex'>
                    <Link to={{ pathname: `/products` }}><li>Nos Produits</li></Link>
                    <Link to={{ pathname: `/products` }}><li>Nouveautés</li></Link>
                    <Link to={{ pathname: `/about` }}><li>A propos</li></Link>
                    <Link to={{ pathname: `/products` }}><li>Petits Prix</li></Link>
                    <Link to={{ pathname: `/contact` }}><li>Contact</li></Link>
                </ul>
            </nav>

            <div className='flex' id="hero-section-text">
                <div className=''>
                    <h1>Vintage Lamps</h1>
                    <button
                        className='btn1'
                        >
                        Discover our lamps
                        </button>
                </div>
            </div>

        </section>

    </header>
  )
}

export default HeaderSmall