import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../utils/CartContext";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.length;
  return (
    <button className={classes.button} onClick={props.onOpenCart}>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
