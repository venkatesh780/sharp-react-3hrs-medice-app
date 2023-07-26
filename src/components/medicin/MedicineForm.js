import classes from "./MedicineForm.module.css";
import Input from "../UI/Input";
import { useRef } from "react";

const MedicineForm = (props) => {
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const entereAmountNumber = +enteredAmount;
    console.log(entereAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="amount"
        input={{
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MedicineForm;
