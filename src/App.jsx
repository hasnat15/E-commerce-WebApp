
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='collection' element={<Collection/>}/>
      </Routes>
      
    </div>
  )
}

export default App
