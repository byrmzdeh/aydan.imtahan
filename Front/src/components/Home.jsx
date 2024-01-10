import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../context/BasketContext'
import { WishlistContext } from '../context/WishlistContext'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        fetch("http://localhost:2000/")
            .then((res) => res.json())
            .then((api) => setData(api))
    }
    function delById(id) {
        fetch("http://localhost:2000/" + id, { method: "delete" })
            .then((res) => res.json())
            .then((api) => {
                getAll()
            })
    }

    const { addBasket } = useContext(BasketContext)
    const { toggleWishlist, checkWishlist } = useContext(WishlistContext)
    return (
        <div className='home'>
            <h1>Products</h1>
            <div className="cards">
                {data && data.map(item => (
                    <div className="card" key={item.id}>
                        <Link to={'/' + item._id} ><img width={120} height={120} src={item.img} alt="" /></Link>
                        <h2>{item.name}</h2>
                        <p>Price: $ {item.price}</p>
                        <p>Color:{item.desc}</p>
                        <div className="buttons">
                            <button className='add-cart' onClick={() => addBasket(item)}>Add to Cart</button>
                            <button className='delete' onClick={() => delById(item._id)}>delete</button>
                        </div>
                        <button className={`wish ${checkWishlist(item) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`} onClick={() => toggleWishlist(item)}></button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home