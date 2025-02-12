import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <Header />
        <section>
            <Outlet />
        </section>
        <Footer />
    </>
  )
}

export default Layout