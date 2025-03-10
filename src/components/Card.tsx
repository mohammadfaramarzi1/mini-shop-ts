import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "./Products.types";

import styles from "./Card.module.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Card({ image, title, price, rating: { rate }, id }: Product) {
  const context = useContext(CartContext);
  const navigate = useNavigate()

  const clickHandler = () => {
    context.addProduct(id);
    swal({
      title: "Added to cart successfully",
      icon: "success",
      buttons: ["ok", "go to cart"],
    })
    .then(res => {
        if(res) {
            navigate("/cart")
        }
    })
  };

  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <main>
        <p className={styles.title}>{title}</p>
        <div className={styles.info}>
          <div className={styles.star}>
            {Array.from({ length: Math.floor(rate) }).map((_, index) => (
              <AiFillStar style={{ color: "orange" }} />
            ))}
            {Array.from({ length: 5 - Math.floor(rate) }).map((_, index) => (
              <AiOutlineStar style={{ color: "orange" }} />
            ))}
          </div>
          <p>${price}</p>
        </div>
        <button onClick={clickHandler}>Add to Basket</button>
      </main>
    </div>
  );
}

export default Card;
