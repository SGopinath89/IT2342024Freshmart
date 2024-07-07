import React, { createContext, useState, useEffect } from "react";
//import product_details from "../Components/Assets/products_details";
export const ShopContext = createContext(null);
// eslint-disable-next-line import/first
import axios from "axios";

const getDefaultCart = ()=>{
    let cart ={};
    for (let index = 0; index < 300+1; index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const [all_products, setAll_Products] = useState([])
    const[cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        axios.get('http://localhost:4000/allproducts')
            .then(response => {
                setAll_Products(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
            
    }, []);
    
    
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type' : 'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((Response)=>Response.json())
            .then((data)=>console.log(data));
        }
    }


    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type' : 'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((Response)=>Response.json())
            .then((data)=>console.log(data));

        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        let itemInfo = all_products.find((product)=>product.id===Number(item))
                        totalAmount += itemInfo.price*cartItems[item];
                    }
                    
            }
            return totalAmount;
    }
    const getTotalCartItems = () => {
        let totalItem = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        
                        totalItem += cartItems[item];
                    }
                    
            }
            return totalItem;
    }



    const contextValue = {getTotalCartItems,getTotalCartAmount,all_products,cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;