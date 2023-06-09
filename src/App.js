import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart ={hideCartHandler}/>}
      <Header onShowCart ={showCartHandler}/>
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;
