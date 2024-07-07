import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import add_icon from '../Assets/add.png'
import remove_icon from '../Assets/minus.png'
const CartItems = () => {
    const {getTotalCartAmount,all_products,cartItems,removeFromCart,addToCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Add</p>
        <p>Quantity</p>
        <p>Remove</p>
        <p>Total</p>
      </div>
      <hr />
      {all_products.map((e)=>{
        if(cartItems[e.id]>0)
            {
                return <div>
                <div className="cartitems-format cartitem-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>RS.{e.price}</p>
                    <button className='cartitems-quantity-icon'><img src={add_icon} onClick={()=>{addToCart(e.id)}}  width="10px" alt="" /></button>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <button className='cartitems-quantity-icon'><img  src={remove_icon} onClick={()=>{removeFromCart(e.id)}}  width="10px" alt="" /></button>
                    <p>RS.{e.price*cartItems[e.id]}</p>
                </div>
                <hr/>
              </div>
            }
            return null;
      })}
      <div className="cartitem-down">
        <div className="cartitems-total">
            <h1>Summary</h1>
            <div>
                <div className="cartitem-total-item">
                    <p>Subtotal</p>
                    <p>RS.{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitem-total-item">
                    <h3>Total</h3>
                    <h3>RS.{getTotalCartAmount()}</h3>
                </div>
                

            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems
