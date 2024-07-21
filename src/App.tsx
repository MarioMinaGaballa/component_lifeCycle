import './App.css'
import NavBar from './component/NavBar'
import AboutUsPage from './Pages/AboutUsPage'
import HomePage from './Pages/HomePage'
import ProductsPage from './Pages/ProductsPage'

function App() {


  return (
    <div className='container mx-auto'>
      <h1 className='text-2xl text-center my-10 bg-white text-black font-bold w-fit mx-auto p-2 rounded-md'>Component LifeCycle</h1>
      <NavBar />
      <HomePage />
      <ProductsPage />
      <AboutUsPage />
    </div>
  )
}

export default App
