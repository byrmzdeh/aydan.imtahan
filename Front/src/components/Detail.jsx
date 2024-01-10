import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    let {id} = useParams()
    const [product,setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:2000/'+ id )
        .then((res)=>res.json())
        .then((api)=>setProduct(api))
    }, [id])
    
  return (
    <div className='detail-cart'>
        {console.log(product)}
        <img width={330} src={product.img} alt="" />
        <div>
        <h2>{product.name}</h2>
        <h3>{product.desc}</h3>
        <p>$ {product.price}</p>
        </div>

    </div>
  )
}

export default Detail