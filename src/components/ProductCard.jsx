import React from 'react'
import cardImg from '../assets/card.jpg'


function ProductCard() {
  return (
    <div>
      <div class="card">
  <img src={cardImg} class="card-img-top" alt="..."/>
  <div class="card-body text-center">
    <a href="#" class="btn btn-primary w-100 mb-4">Add to card</a>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">MRP-220</p>
    <span>⭐⭐⭐⭐⭐</span>
  </div>
</div>
    </div>
  )
}

export default ProductCard
