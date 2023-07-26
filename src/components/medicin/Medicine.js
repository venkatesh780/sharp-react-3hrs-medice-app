import AvailableMedicine from "./AvailableMedicine";
import classes from "./Medicine.module.css";

const Medicine = () => {
  return (
    <div className={classes.medicine}>
      <AvailableMedicine />
    </div>
  );
};

export default Medicine;
