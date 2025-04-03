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
import DetailProduct from './PAGES/PRODUCTS/DetailProduct'
//--
import DashBoard from './PAGES/DASHBOARD/DashBoard'
import UpdateArtDetail from './PAGES/DASHBOARD/GESTION-PRODUITS/UpdateArtDetail'


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
        <Route path='/news' element={<OurProducts />} />

        <Route path="/products/:id" element={<DetailProduct />} />

      </Route>

      <Route path='/' element={<LayoutDSH/>}>

        <Route path='/dashboard/update/:id' element={<UpdateArtDetail/>}/>
        <Route path='/dashboard' element={<DashBoard />} />

      </Route>

    </Routes>

    </div>
  )
}

export default App
