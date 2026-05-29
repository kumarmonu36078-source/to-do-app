import React from 'react'
import { CartContext } from '../App'
import { useContext } from 'react'
import { products } from '../data'

function CardPage() {
  const {Cart ,setCart} = useContext(CartContext)
  return (
    <div className='container'>
    
      <table class="table">
    <thead>
      <tr>
        <th scope="col">image</th>
        <th scope="col">name</th>
        <th scope="col">price</th>
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
          <td>77777</td>
        </tr>
            ))
          }
        
      </tbody>
  </table>
    </div>
  )
}

export default CardPage
