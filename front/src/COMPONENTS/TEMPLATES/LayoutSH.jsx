import React from 'react'
import HeaderSmall from './HeaderSmall'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const LayoutSH = () => {
  return (
    <>
        <HeaderSmall />
        <section>
            <Outlet />
        </section>
        <Footer />
    </>
  )
}

export default LayoutSH