import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Medicine Store</h1>
      <HeaderCartButton />
    </header>
  );
};

export default Header;
