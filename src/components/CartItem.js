import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseFromCart, increaseFromCart, removeFromCart } from '../store/products/actions'

export default function CartItem({productDetails}) {
  const getQuantities = useSelector(state=>state.products.filter(i=>i.id==productDetails.id)[0].quantity)
  const dispatch = useDispatch()
  const incrementHandler = ()=>{
    dispatch(increaseFromCart(productDetails.id))
  }
  const decrementHandler = ()=>{
    dispatch(decreaseFromCart(productDetails.id))
  }
  const removeItem = () =>{
    dispatch(removeFromCart(productDetails.id))
  }
  return (
    <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
              
              <img className="lws-cartImage" src={productDetails.imageURL} alt="product" />
              
              <div className="space-y-2">
                <h4 className="lws-cartName">{productDetails.name}</h4>
                <p className="lws-cartCategory">{productDetails.category}</p>
                <p>BDT <span className="lws-cartPrice">{productDetails.price}</span></p>
              </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
              
              <div className="flex items-center space-x-4">
                <button className="lws-incrementQuantity" disabled={getQuantities<=0?true:false}onClick={incrementHandler}>
                  <i className="text-lg fa-solid fa-plus"></i>
                </button>
                <span className="lws-cartQuantity">{productDetails.addedQuantity}</span>
                <button className="lws-decrementQuantity" onClick={decrementHandler}>
                  <i className="text-lg fa-solid fa-minus"></i>
                </button>
              </div>
              
              <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{productDetails.calculatedPrice}</span></p>
            </div>
            
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
              <button className="lws-removeFromCart" onClick={removeItem}>
                <i className="text-lg text-red-400 fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
  )
}
