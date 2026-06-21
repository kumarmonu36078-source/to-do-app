import React from 'react'
import { useParams } from 'react-router'
import { products } from '../data'

function DetailPage() {
  const {_id} = useParams()
  const item=products.find((item)=>item._id == _id)
  return (
    <div className='container'>
      <p>category:{item.category}</p>
      <img style={{width:'200px'}} src={item.image} alt="" />
      <h4> {item.title}</h4>
      <p>{item.description}</p>
      <p><strong>{item.price}</strong></p>
      <button className="btn btn-primary w-100 mb-4" >Add to card</button>
    </div>
  )
}

export default DetailPage
