import React from 'react'
import './style.scss'
import '../../var.scss'

const Header = () => {
  return (
    <header>

        <nav id="secondary-nav" class="w-100 flex justify-right">
                    <ul className='flex justify-right'>
                        <li id="search-input">
                            <input type='search' placeholder='Rechercher un produit'></input>
                            <button type="submit" title="rechercher un produit"></button>
                        </li>
                        <li>Langage</li>
                        <li>Search</li>
                        <li>Compte</li>
                        <li>Panier</li>
                    </ul>
        </nav>

        <section id="hero-section">

            <nav id="primary-nav" className='flex justify-space-between'>
                <ul>
                    <li>Logo</li>
                </ul>

                <ul className='flex'>
                    <li>Nos Produits</li>
                    <li>Nouveautés</li>
                    <li>A propos</li>
                    <li>Petits Prix</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className='flex' id="hero-section-text">
                <div className='w-50 p-15'>
                    <h1>Vintage Lamps</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum ea esse dolore! Earum impedit, expedita rerum a
                        delectus ratione officia similique aut dolores eaque
                        voluptatem molestias, voluptatum, eligendi atque dolorum.</p>
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

export default Header