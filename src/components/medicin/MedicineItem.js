import classes from "./MedicineItem.module.css";
import MedicineForm from "./MedicineForm";
import { useContext } from "react";
import CartContext from "../utils/CartContext";

const MedicineItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.medicine.id,
      name: props.medicine.name,
      price: props.medicine.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.medicine.name}</h3>
        <div className={classes.description}>{props.medicine.description}</div>
        <div className={classes.price}>{props.medicine.price}</div>
      </div>
      <div>
        <MedicineForm onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MedicineItem;
