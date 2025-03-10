import { FaShoppingBasket } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdDelete } from "react-icons/md";

function Header() {
  const context = useContext(CartContext);

  const location = useLocation();

  const clickHandler = () => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: ["No", "Yes"],
    }).then((res) => {
      if (res) {
        context.removeAll();
      }
    });
  };

  return (
    <header className={styles.header}>
      <Link to="/">Shopping Store</Link>
      {location.pathname === "/" ? (
        <Link to="/cart" className={styles.cart}>
          <FaShoppingBasket />
          {context.userCart.length > 0 ? (
            <span>{context.userCart.length}</span>
          ) : null}
        </Link>
      ) : (
        <button className={styles.button} onClick={clickHandler}>
          <MdDelete />
          Remove All Products
        </button>
      )}
    </header>
  );
}

export default Header;
