import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/products/actions";

export default function SingleProduct({ productDetails }) {
  const dispatch = useDispatch();
  const isDisable = useSelector((state) => {
    
    const item = state.products.filter((i) => i.id == productDetails.id);
    return item[0].quantity <= 0
  });
  const addToCartHandler = () => {
    const id = productDetails.id;
    dispatch(addToCart(id));
  };
  return (
    <div className="lws-productCard">
      <img
        className="lws-productImage"
        src={productDetails.imageURL}
        alt="product"
      />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{productDetails.name}</h4>
        <p className="lws-productCategory">{productDetails.category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{productDetails.price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{productDetails.quantity}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          disabled={isDisable}
          onClick={addToCartHandler}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
