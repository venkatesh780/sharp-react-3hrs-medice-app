import { createContext } from "react";

const AddMedicineContext = createContext({
  items: [],
  addItem: (item) => {},
});

export default AddMedicineContext;
