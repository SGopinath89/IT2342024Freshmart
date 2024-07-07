// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import add_Product_icon from '../../assets/Carticon.jpg'
import list_Product_icon from '../../assets/Product list.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{TextDecoder:"none"}}>
           <div className="sidebar-item">
            <img src={add_Product_icon} width="50px" height="auto" alt=""/>
            <p>Add Product</p>
           </div>
           </Link> 
       
        <Link to={'/listproduct'} style={{TextDecoder:"none"}}>
        <div className="sidebar-item">
         <img src={list_Product_icon} width="50px" height="auto" alt=""/>
         <p>Product List</p>
        </div>
        </Link> 
    </div>
  )
}

export default Sidebar
