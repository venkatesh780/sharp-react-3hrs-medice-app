import CartContext from "./CartContext";

const CartProvider = (props) => {
  const addItemToCart = (item) => {};
  const removeItemFromCart = (id) => {};
  const cartContext = {
    items: [{ id: "c1", name: "para", price: 100, amount: 2 }],
    totalAmount: 100,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
