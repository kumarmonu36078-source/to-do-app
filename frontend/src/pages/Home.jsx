import React from 'react'
//import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
// import { products } from '../data'
import HeroPage from '../components/HeroPage'
import { useEffect, useState } from 'react'

function Home() {
  const [product, setProduct] = useState([])
  // 
  const getProductFromApi = async () => {
  try {
    const res = await fetch('http://localhost:7000/products');
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    setProduct(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
   useEffect(()=>{
    getProductFromApi();
   }, [])

  return (
  <>
    <HeroPage />
    {/* Cards ka main wrapper container */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Ek row me automatic cards adjust honge
      gap: '25px',
      padding: '30px',
      maxWidth: '1200px',
      margin: '0 auto' // Center me lane ke liye
    }}>
      {product.map((item) => (
        <ProductCard key={item._id} product={item} />
      ))}
    </div>
  </>
);
}

export default Home
