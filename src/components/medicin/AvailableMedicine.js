import classes from "./AvailableMedicine.module.css";
import { DUMMY_MEDICINE } from "../utils/config";
import Card from "../UI/Card";
import MedicineItem from "./MedicineItem";

const AvailableMedicine = () => {
  const medinceList = DUMMY_MEDICINE.map((medicine) => (
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
