import React from 'react'
import './breadcrum.css'
import arrow_icon from '../Assets/right.png'
const breadcrum = (props) => {
    const {product} = props ;
  return (
    <div className='breadcrum'>
        Home <img src={arrow_icon} alt="" width="10px" height="auto"/>{product.category} <img src={arrow_icon} alt="" width="10px" height="auto"/>{product.name}
      
    </div>
  )
}

export default breadcrum
