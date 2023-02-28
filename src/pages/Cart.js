import React from "react";
import Bill from "../components/Bill";
import CartContainer from "../components/CartContainer";

export default function Cart() {
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <CartContainer />
          <Bill />
        </div>
      </div>
    </main>
  );
}
