import React from 'react'
import cardImg from '../assets/card.jpg'


function ProductCard() {
  return (
    <div>
      <div className="card">
  <img src={cardImg} className="card-img-top" alt="..."/>
  <div className="card-body text-center">
    <a href="#" className="btn btn-primary w-100 mb-4">Add to card</a>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">MRP-220</p>
    <span>⭐⭐⭐⭐⭐</span>
  </div>
</div>
    </div>
  )
}

export default ProductCard
