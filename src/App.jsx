import './App.css'
import { Routes, Route } from "react-router-dom"

// Les LAYOUT
import Layout from './COMPONENTS/TEMPLATES/Layout'
import LayoutSH from './COMPONENTS/TEMPLATES/LayoutSH'
import LayoutDSH from './COMPONENTS/TEMPLATES/LayoutDSH'

// LES PAGES
import Home from './PAGES/HOME/Home'
import About from './PAGES/ABOUT/About'
import Connexion from './PAGES/CONNEXION/Connexion'
import Contact from './PAGES/CONTACT/Contact'
import OurProducts from './PAGES/PRODUCTS/OurProducts'

import DashBoard from './PAGES/DASHBOARD/DashBoard'



function App() {

  return (
    <div className='App'>

    <Routes>

      <Route path='/' element={<Layout />}>

        <Route index element={<Home />}/>

      </Route>

      <Route path='/' element={<LayoutSH />}>

        <Route path='/about' element={<About />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<OurProducts />} />

      </Route>

      <Route path='/' element={<LayoutDSH/>}>

        <Route path='/dashboard' element={<DashBoard />} />

      </Route>

    </Routes>

    </div>
  )
}

export default App
