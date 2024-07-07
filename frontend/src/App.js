
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import vegi_banner from './Components/Assets/Frame of fresh vegetables on wooden background with copy space.jpg'
import fruits_banner from './Components/Assets/Summer fresh fruit variety stock photo containing fruit and food.jpg'
import meat_banner from './Components/Assets/Vista superior deliciosa variedade de carne com espaço de cópia _ Foto Premium.jpg'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Vegitables' element={<Category banner={vegi_banner} category="Vegetables"/>}/>
        <Route path='/Fruites' element={<Category banner={fruits_banner} category="Fruits"/>}/>
        <Route path='/Meats' element={<Category banner={meat_banner} category="Meat"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
