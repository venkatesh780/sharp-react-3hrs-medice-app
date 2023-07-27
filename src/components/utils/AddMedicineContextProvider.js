import AddMedicineContext from "./AddMedicineContext";
import { useState } from "react";
import { DUMMY_MEDICINE } from "./config";

const AddMedicineContextProvider = (props) => {
  const [items, setItems] = useState(DUMMY_MEDICINE);

  const addItemToList = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };
  const medicines = {
    items: items,
    addItems: addItemToList,
  };

  return (
    <AddMedicineContext.Provider value={medicines}>
      {props.children}
    </AddMedicineContext.Provider>
  );
};

export default AddMedicineContextProvider;
