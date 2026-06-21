import React from 'react'
import cardImg from '../assets/card.jpg'
import { Link } from 'react-router'
import { products } from '../data';
import {CartContext}from '../App'
import { useContext } from 'react';
import { Rating } from 'react-simple-star-rating'

function ProductCard(props) {
  const{Cart,setCart}= useContext(CartContext)
  function idify(text) {
  return text
    .toLowerCase()                 // Convert to lowercase
    .trim()                        // Remove extra spaces
    .replace(/[^\w\s-]/g, "")      // Remove special characters
    .replace(/\s+/g, "-")          // Replace spaces with -
    .replace(/--+/g, "-");       
}
const  handleClick =(p)=>{
const foundItem = Cart.find((i)=>i._id == p._id)
if(!foundItem){
 setCart([...Cart,p]);
}
  // yaha mane ek new value li h new value ko existing karane ke liye //purani value exsiting me jay gi new p me aayge 
}
 return (
  <div style={{ height: '100%' }}>
    <div className="card mb-2" style={{ 
      border: '1px solid #e0e0e0', 
      borderRadius: '8px', 
      padding: '15px', 
      backgroundColor: '#fff',
      height: '450px',            // 1. Saare cards ki height ek barabar (fix) kar di
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between' // 2. Isse buttons aur price hamesha ek line me niche rahenge
    }}>
      
      {/* Image Container */}
      <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src={props.product.image} 
          className="card-img-top" 
          alt={props.product.title || props.product.name} 
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', padding: '10px' }} 
        />
      </div>

      {/* Body Container */}
      <div className="card-body text-center" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        flexGrow: 1, 
        justifyContent: 'space-between',
        paddingTop: '15px'
      }}>
        
        {/* Title: Agar title 2 line se bada hoga toh ... dikhega aur height kharab nahi hogi */}
        <Link 
          to={`/product/${props.product.id}`} 
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <h5 className="card-title" style={{
            fontSize: '15px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2, // Max 2 lines dikhegi title ki
            WebkitBoxOrient: 'vertical',
            minHeight: '40px', // Khali jagah fix rahegi chahe title chota ho
            margin: '10px 0'
          }}>
            {props.product.title || props.product.name}
          </h5>
        </Link>

        {/* Price, Rating aur Button ek sath niche fix rahenge */}
        <div>
          <p className="card-text" style={{ fontWeight: 'bold', margin: '5px 0' }}>
            MRP - ${props.product.price}
          </p>
          <Rating readonly={true} allowFraction={true} initialValue={props.product.rating.rate} />

          
          <button 
            className="btn btn-primary w-100" 
            onClick={() => handleClick(props.product)}
            style={{ padding: '8px 0' }}
          >
            Add to card-
          </button>
        </div>

      </div>

    </div>
  </div>
);
}

export default ProductCard
