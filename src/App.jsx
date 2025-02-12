import './App.css'
import { Routes, Route } from "react-router-dom"
import Layout from './COMPONENTS/TEMPLATES/Layout'
import Home from './PAGES/HOME/Home'

// Pages


function App() {

  return (
    <div className='App'>

    <Routes>

      <Route path='/' element={<Layout />}>

        <Route index element={<Home />}/>

      </Route>

    </Routes>

    </div>
  )
}

export default App
