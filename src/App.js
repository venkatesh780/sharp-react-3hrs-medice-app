import Header from "./components/header/Header";
import Medicine from "./components/medicin/Medicine";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import CartProvider from "./components/utils/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCart = () => {
    setIsCartShown(true);
  };
  const hideCart = () => {
    setIsCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && <Cart onCloseCart={hideCart} />}
      <Header onOpenCart={showCart} />
      <Medicine />
    </CartProvider>
  );
}

export default App;
