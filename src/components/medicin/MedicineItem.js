import classes from "./MedicineItem.module.css";

const MedicineItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.medicine.name}</h3>
        <div className={classes.description}>{props.medicine.description}</div>
        <div className={classes.price}>{props.medicine.price}</div>
      </div>
      <div>
        <h3>form</h3>
      </div>
    </li>
  );
};

export default MedicineItem;
