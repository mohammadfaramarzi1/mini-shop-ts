import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {
  const cart = useContext(CartContext);

  return (
    <header className={styles.header}>
      <Link to="/">Shopping Store</Link>
      <Link to="/cart" className={styles.cart}>
        <FaShoppingBasket />
        {cart.userCart.length > 0 ? <span>{cart.userCart.length}</span> : null}
      </Link>
    </header>
  );
}

export default Header;
