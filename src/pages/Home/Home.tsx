import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Card from "../../components/Card";

import styles from "./Home.module.css"

function Home() {
  const context = useContext(CartContext);
  console.log(context.shop)

  return (
    <div className={styles.home}>
      {context.shop.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Home;
