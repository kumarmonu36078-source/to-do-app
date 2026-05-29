import React from 'react'
import { useParams } from 'react-router'
import { products } from '../data'

function DetailPage() {
  const {id} = useParams()
  const item=products.find((item)=>item.id == id)
  return (
    <div className='container'>
      <p>category:{item.category}</p>
      <img style={{width:'200px'}} src={item.image} alt="" />
      <h4> {item.name}</h4>
      <p>{item.description}</p>
      <p><strong>{item.price}</strong></p>
      <button className="btn btn-primary w-100 mb-4">Add to card</button>
    </div>
  )
}

export default DetailPage
