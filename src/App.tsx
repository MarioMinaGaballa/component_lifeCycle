import { useState } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import AboutUsPage from './Pages/AboutUsPage'
import HomePage from './Pages/HomePage'
import ProductsPage from './Pages/ProductsPage'
import HooksPage from './Pages/HooksPage'

function App() {
const [page,setPage] = useState<'home' | 'products' | 'about' |'useeffect'>('home')

  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl text-center my-10 bg-white text-black font-bold w-fit mx-auto p-2 rounded-md'>Component LifeCycle</h1>
      <NavBar setPage={setPage}/>
      {page==="home" && <HomePage/>}
      {page==="products" && <ProductsPage/>}
      {page==="about" && <AboutUsPage/>}
      {page==="useeffect" && <HooksPage/>}
    </div>
  )
}

export default App
