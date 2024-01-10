import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'

const Basket = () => {
  const { basket, increase, decrease, remove } = useContext(BasketContext)
  return (
    <div className='basket'>
      <table border={1}>
        <tr>
          <th><h3>Image</h3></th>
          <th><h3>Name</h3></th>
          <th><h3>Price</h3></th>
          <th><h3>Color</h3></th>
          <th><h3>Count</h3></th>
          <th><h3>Delete</h3></th>
        </tr>

        {basket.map(item => (
          <tr className='card' key={item.id}>
            <td><img width={200} src={item.img} alt="" /></td>
            <td><h2>{item.name}</h2></td>
            <td><h3>$ {item.price}</h3></td>
            <td><h3>{item.desc}</h3></td>
            <td className='count'>
              <button className='minus' onClick={() => decrease(item)}>-</button>
              <h3>{item.count}</h3>
              <button className='plus' onClick={() => increase(item)}>+</button>
            </td>
            <td><button className='delete' onClick={() => remove(item)}>X</button></td>
          </tr>
        ))}


      </table>

    </div>
  )
}

export default Basket