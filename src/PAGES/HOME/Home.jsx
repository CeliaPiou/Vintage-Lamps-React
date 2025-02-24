import React from 'react'
import './style.scss'
import ContainerLinks from './ContainerLinks'
import HomeAboutMe from './HomeAboutMe'
import HomeLatestProducts from './HomeLatestProducts'
import HomeSquares from './HomeSquares'
import HomeDelivery from './HomeDelivery'
import HomeLatestAvis from './HomeLatestAvis'
import AnimatedCounter from './AnimatedCompteur'


const Home = () => {
  return (
    <main>

      <ContainerLinks />
      <HomeAboutMe />
      <HomeLatestProducts />
      <HomeSquares />
      <AnimatedCounter />
      <HomeLatestAvis />
      <HomeDelivery />

    </main>
  )
}

export default Home