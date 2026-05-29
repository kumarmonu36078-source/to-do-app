import React from 'react'
//import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { products } from '../data'

function Home() {
  return (
    <>
       <div className="container">
        <div className="row">
          {
  products.map((product) => (
    <div className="col-md-4" key={product.id}> 
      {/* <img src={product.image} className="card-img-top" alt="..." /> */}
      <ProductCard product={product} />
    </div>
  ))
}
          
          
        </div> 
       </div>

    </>
  )
}

export default Home
