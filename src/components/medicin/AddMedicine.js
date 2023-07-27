import classes from "./AddMedicine.module.css";
import Card from "../UI/Card";
import { useRef, useContext } from "react";
import AddMedicineContext from "../utils/AddMedicineContext";

const AddMedicine = () => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef(0);

  const medicineCtx = useContext(AddMedicineContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const medicineID = `m_${medicineCtx.items.length}`;
    const medicine = {
      id: medicineID,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: +priceRef.current.value,
    };
    medicineCtx.addItems(medicine);

    nameRef.current.value = "";
    descriptionRef.current.value = "";
    priceRef.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.meals}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
        <label htmlFor="description">Description</label>
        <input type="text" id="description" ref={descriptionRef} />
        <label htmlFor="price">Price</label>
        <input type="number" id="price" ref={priceRef} />
        <button type="submit" className={classes.button}>
          Add Medicine
        </button>
      </form>
    </Card>
  );
};

export default AddMedicine;
