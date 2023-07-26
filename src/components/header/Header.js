import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import medicineImage from "../asserts/medicine.jpeg";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Medicine Store</h1>
        <HeaderCartButton onOpenCart={props.onOpenCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={medicineImage} alt="table of meals" />
      </div>
    </>
  );
};

export default Header;
