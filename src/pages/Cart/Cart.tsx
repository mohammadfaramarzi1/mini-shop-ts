import { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";
import Card from "../../components/Card";

function Cart() {
  const context = useContext(CartContext);

  return (
    <div className={styles.cart}>
      {context.userCart.length ? context.userCart.map((product) => (
        <Card key={product.id} {...product} />
      )) : <p className={styles.empty}>Empty...</p>}
    </div>
  );
}

export default Cart;
