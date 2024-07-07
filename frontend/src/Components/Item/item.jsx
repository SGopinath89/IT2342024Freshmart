import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'


const item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-price">
            RS.{props.price}
            
        </div>
        <div className="item-weight item-price">
        {props.weight}500 g
        </div>
      
    </div>
  )
}

export default item
