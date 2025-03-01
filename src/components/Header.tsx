import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./Header.module.css"

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">Shopping Store</Link>
      <Link to="/cart" className={styles.cart}>
        <FaShoppingBasket />
        <span>0</span>
      </Link>
    </header>
  );
}

export default Header;
