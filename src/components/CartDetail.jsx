import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const CartDetail = () => {
    const { id } = useParams();

    const [product,setProduct]=useState({});

    useEffect(()=>{
        const filteredProduct=items.filter((product)=>product.id==id)
        console.log(filteredProduct);
    })
  return (
    <div>
      <img src={product?.img} alt="" />
      <h1>{id}</h1>
    </div>
  )
}

export default CartDetail
