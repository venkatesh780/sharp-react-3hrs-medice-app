import classes from "./AvailableMedicine.module.css";

import Card from "../UI/Card";
import MedicineItem from "./MedicineItem";
import { useContext } from "react";
import AddMedicineContext from "../utils/AddMedicineContext";

const AvailableMedicine = () => {
  const medicineCtx = useContext(AddMedicineContext);

  const medicines = medicineCtx.items;
  const medinceList = medicines.map((medicine) => (
    <MedicineItem medicine={medicine} key={medicine.id} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{medinceList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMedicine;
