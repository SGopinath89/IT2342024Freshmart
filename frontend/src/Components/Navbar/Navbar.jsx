import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/freshMart.png'
import cart_icon from '../Assets/shopping-cart.png'
import login_person from '../Assets/profile.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {

    const [menu,setMenu] = useState("Home");
    const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" width="100px" height="auto"/>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Vegitables")}}><Link style={{textDecoration: 'none'}} to='/Vegitables'>Vegitables</Link>{menu==="Vegitables"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Fruites")}}><Link style={{textDecoration: 'none'}} to='/Fruites'>Fruites</Link>{menu==="Fruites"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Meats")}}><Link style={{textDecoration: 'none'}} to='/Meats'>Meats</Link>{menu==="Meats"?<hr/>:<></>}</li>
      </ul>
      <div className="login-person">
        <img src={login_person} alt="" width="50px" height="auto" />
        {localStorage.getItem('auth-token')
          ?<Link style={{textDecoration: 'none'}} onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</Link>
        :<Link style={{textDecoration: 'none'}} to='/login'>Login</Link>}
        
        
      </div>
      <div className="nav-cart">
        <Link to='/cart'><img src={cart_icon} alt="" width="50px" height="auto"/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
