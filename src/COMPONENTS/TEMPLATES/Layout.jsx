import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
        <Header />
        <section>
            <Outlet />
        </section>
        <Footer />
    </main>
  )
}

export default Layout