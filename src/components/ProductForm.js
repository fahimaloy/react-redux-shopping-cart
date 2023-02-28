import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProuct } from "../store/products/actions";

export default function ProductForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !category || !imageURL || !price || !quantity) {
      alert("Please Provide Form Information Correctly!");
      return;
    } else {
      dispatch(addProuct({ name, category, imageURL, price, quantity }));
      console.info("Successfully Added Product!");
      setName("");
      setPrice("");
      setImageURL("");
      setQuantity("");
      setCategory("");
    }
  };
  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              value={category}
              required
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              value={imageURL}
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                value={price}
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                value={quantity}
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
          </div>
          <button
            onClick={submitHandler}
            type="submit"
            id="lws-inputSubmit"
            className="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
