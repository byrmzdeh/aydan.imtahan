import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to='/add'>Add Page</NavLink>
            <NavLink to='/basket'>Basket</NavLink>
            <NavLink to='/wishlist'>Wishlist</NavLink>



       
    </div>
  )
}

export default Navbar