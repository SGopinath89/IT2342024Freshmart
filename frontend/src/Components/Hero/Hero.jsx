import React, { useState } from 'react'
import './Hero.css'
import slide from '../Assets/slide1.jpg'
import Vegitable from '../Assets/download (34).jpg'
import Fruites from '../Assets/Healthy summer fruit variety featuring fruit, fresh, and summer.jpg'
import Meats from '../Assets/raw meat (1).jpg'
import { Link } from 'react-router-dom'
const Hero = (props) => {
  const [menu,setMenu] = useState("Home");
  return (
    <div className='hero'>
      <div className="hero_slide">
        
      <img src={slide} alt="" height="400px" width="1408px" />
      <h1> CATEGORY </h1>
      <div className="hero_category">
        <div className="category_vegitables">
        <Link style={{textDecoration: 'none'}} to='/Vegitables'><img src={Vegitable} alt="" height="400px" width="auto"/></Link>
            <h3 onClick={()=>{setMenu("Vegitables")}}><Link style={{textDecoration: 'none'}} to='/Vegitables'>Vegitables</Link>{menu==="Vegitables"?<hr/>:<></>}</h3><hr/>
        </div>
        <div className="category_Fruites">
        <Link style={{textDecoration: 'none'}} to='/Fruites'><img src={Fruites} alt="" height="400px" width="auto" /></Link>
            <h3 onClick={()=>{setMenu("Fruites")}}><Link style={{textDecoration: 'none'}} to='/Fruites'>Fruites</Link>{menu==="Fruites"?<hr/>:<></>}</h3><hr/>
        </div>
        <div className="category_Meats">
        <Link style={{textDecoration: 'none'}} to='/Meats'><img oonClick={()=>{Meats(Meats)}} src={Meats} alt="" height="400px" width="auto" /></Link>
            <h3 onClick={window.scrollTo(0,0)}><Link style={{textDecoration: 'none'}} to='/Meats'>Meats</Link> {menu==="Meats"?<hr/>:<></>}</h3><hr/>
        </div>
      </div>
      </div>
      
    </div>
    
  )
}

export default Hero
