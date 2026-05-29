import React from 'react'
import cardImg from '../assets/card.jpg'
import { Link } from 'react-router'
import { products } from '../data';
import {CartContext}from '../App'
import { useContext } from 'react';


function ProductCard(props) {
  const{Cart,setCart}= useContext(CartContext)
  function idify(text) {
  return text
    .toLowerCase()                 // Convert to lowercase
    .trim()                        // Remove extra spaces
    .replace(/[^\w\s-]/g, "")      // Remove special characters
    .replace(/\s+/g, "-")          // Replace spaces with -
    .replace(/--+/g, "-");  
           // Remove multiple -
           
}


const  handleClick =(p)=>{
const foundItem = Cart.find((i)=>i.id == p.id)
if(!foundItem){
 setCart([...Cart,p]);
}
  // yaha mane ek new value li h new value ko existing karane ke liye //purani value exsiting me jay gi new p me aayge 
  
}
  return (
    <div>
      <div className="card mb-2">
  <img src={props.product.image} className="card-img-top" alt="..."/>
  <div className="card-body text-center">
    <button className="btn btn-primary w-100 mb-4"onClick={()=>handleClick(props.product)}>Add to card-</button>
    <Link to={`/product/${ props.product.id}`} style={{textDecoration:'none', color:'black'}}>
    <h5 className="card-title">{props.product.name}</h5>
    </Link>
    <p className="card-text">MRP-{props.product.price}</p>
    <span>⭐⭐⭐⭐⭐</span>
  </div>
</div>
    </div>
  )
}

export default ProductCard
