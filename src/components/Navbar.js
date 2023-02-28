import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../static/images/logo.png";
import { changeView } from "../store/products/actions";

export default function Navbar() {
  const dispatch = useDispatch();
  const changeViewHandler = (name) => {
    dispatch(changeView(name));
  };
  const cartItemNumber = useSelector((state) => state.cart.cartCount);
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={Logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <p
            onClick={() => changeViewHandler("home")}
            className="navHome"
            id="lws-home"
          >
            {" "}
            Home{" "}
          </p>
          <p
            onClick={() => changeViewHandler("cart")}
            className="navCart"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{cartItemNumber>10?'10+':cartItemNumber}</span>
          </p>
        </div>
      </div>
    </nav>
  );
}
