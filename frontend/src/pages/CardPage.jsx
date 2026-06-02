import React from 'react'
import { CartContext } from '../App'
import { useContext } from 'react'
import { products } from '../data'

function CardPage() {
  const {Cart ,setCart} = useContext(CartContext)
  const handleClearCart = ()=>{
    setCart([])
  }
         const handleDlelteCart = (id)=>{
            const updateCart = Cart.filter(c=>c.id != id)
            setCart(updateCart)
          }

          
  return (
    <div className='container'>
    
      <table className="table">
    <thead>
      <tr>
        <th scope="col">image</th>
        <th scope="col">name</th>
        <th scope="col">price</th>
        
        <th scope="col">Remove</th>
      </tr>
    </thead>
      <tbody>
          {
            Cart.map(item=>(
        <tr key={item.id}>
          <td>
            <img width={50} src={item.image} alt="" />
          </td>
          <td>item.name</td>
          <td>item.price</td>
          <td className='btn btn-danger' onClick={()=>handleDlelteCart(item.id)}>
            <i className="bi bi-trash-fill"></i>
          </td>
        </tr>
            ))
          }
        
      </tbody>
  </table>
  <button className='btn btn-danger' onClick={handleClearCart}>Clear Cart</button>
    </div>
  )
}

export default CardPage
