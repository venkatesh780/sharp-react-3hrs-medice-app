import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../utils/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = [{ id: "c1", name: "Para", price: 16, amount: 1 }];
  const cartCtx = useContext(CartContext);
  const cartCtxItems = cartCtx.items;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtxItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{0}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button---alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
