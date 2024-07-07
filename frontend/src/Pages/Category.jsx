import React, { useContext, useState, useEffect } from 'react'
import './css/Category.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/item'



const Category = (props) => {
 
  const [all_products, setAll_Product] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
    .then((response) => response.json())
    .then((data) => setAll_Product(data));
  }, []);

  return (
    
      <div className="shop-category">
        <img src={props.banner} alt="" height="400px" width="1408px"/>
        <div className="category-indexSort">
          <p>
            
          </p>

        </div>
        <div className="shop-product">
              
          {/* Products from Database */}
          {all_products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          } else {
            return null;
          }
        })}
        </div>
      </div>
    
  )
}

export default Category
