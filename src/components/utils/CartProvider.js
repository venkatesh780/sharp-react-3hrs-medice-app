import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultValue = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultValue;
};

const CartProvider = (props) => {
  const [state, dispatchAction] = useReducer(cartReducer, defaultValue);

  const addItemToCart = (item) => {
    dispatchAction({ type: "ADD", item: item });
  };
  const removeItemFromCart = (id) => {};

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
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
