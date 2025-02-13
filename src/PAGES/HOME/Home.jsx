import React from 'react'
import './style.scss'
import ContainerLinks from './ContainerLinks'
import HomeAboutMe from './HomeAboutMe'
import HomeLatestProducts from './HomeLatestProducts'
import HomeSquares from './HomeSquares'

const Home = () => {
  return (
    <main>

      <ContainerLinks />
      <HomeAboutMe />
      <HomeLatestProducts />
      <HomeSquares />

    </main>
  )
}

export default Home