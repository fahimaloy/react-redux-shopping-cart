import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./store/store";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
function App() {
  const view = useSelector((state) => state.view);
  return (
    <div>
      <Navbar />
      {view === "cart" ? <Cart /> : <Home />}
    </div>
  );
}

export default App;
