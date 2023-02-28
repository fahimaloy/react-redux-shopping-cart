import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartContainer() {
  const cartItems = useSelector(state=>state.cart.items)
  return (
    <div className="space-y-6">
      {cartItems.length>0?cartItems.map((i) => (
        <CartItem productDetails={i} key={i.id}/>
      )):<p>No Items Added to the Cart.</p>}
    </div>
  );
}
