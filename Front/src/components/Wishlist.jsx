import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'

const Wishlist = () => {
    const {wishlist} = useContext(WishlistContext)
  return (
    <div>
      {wishlist.map(item=>(
        <div className="wishlist-cart">
            <img width={200} src={item.img} alt="" />
            <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default Wishlist
