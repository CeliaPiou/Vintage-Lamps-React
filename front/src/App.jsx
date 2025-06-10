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
import Panier from './PAGES/PANIER/Panier'
import Paiement from './PAGES/PANIER/Paiement'

//-- Dashboard Materials
import DashBoard from './PAGES/DASHBOARD/DashBoard'
import UpdateArtDetail from './PAGES/DASHBOARD/GESTION-PRODUITS/UpdateArtDetail'
import UpdateOrder from './PAGES/DASHBOARD/GESTION-CDES/UpdateOrder'
import UpdateUser from './PAGES/DASHBOARD/GESTION-USER/UpdateUser'
import UpdateCat from './PAGES/DASHBOARD/GESTION-CATEGORY/UpdateCat'

// SERVICES
import PrivateRouter from './UTILS/helpers/PrivateRouter'
import PublicRouter from './UTILS/helpers/PublicRouter'



function App() {

  return (

    <div className='App'>

    <Routes>

      {/* PAGE PUBLIQUE GRAND HEADER */}
      <Route path='/' element={<Layout />}>

        <Route index element={<Home />}/>

      </Route>

      {/* PAGES PUBLIQUES AVEC PETIT HEADER */}
      <Route path='/' element={<LayoutSH />}>

        <Route path='/about' element={<About />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/cart' element={<Panier/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<OurProducts />} />
        <Route path='/news' element={<OurProducts />} />
        <Route path='/order-approuved' element={<Paiement/>} />

        <Route path="/products/:id" element={<DetailProduct />} />

      </Route>

      {/* DASHBOARD RESERVE A L'ADMIN */}
      <Route element={<PrivateRouter />} >
        <Route path='/' element={<LayoutDSH/>}>
          <Route path='/dashboard/update/:id' element={<UpdateArtDetail/>}/>
          <Route path="/dashboard/update-order/:id" element={<UpdateOrder/>}/>
          <Route path="/dashboard/update-user/:id" element={<UpdateUser/>} />
          <Route path="/dashboard/update-category/:id" element={<UpdateCat/>} />

          <Route path='/dashboard' element={<DashBoard />} />
        </Route >
      </Route >

    </Routes>

    </div>
  )
}

export default App
