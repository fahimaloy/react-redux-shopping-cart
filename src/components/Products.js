import React from 'react'
import { useSelector } from 'react-redux'
import SingleProduct from './SingleProduct'
export default function Products() {
  const products = useSelector((state)=>state.products)
  return (
    <div className="productContainer" id="lws-productContainer">
        {products.length<=0?<p>No Products to show!!!</p>:products.map(i=>(
            <SingleProduct productDetails={i} key={i.id}/>
        ))}
    </div>
  )
}
