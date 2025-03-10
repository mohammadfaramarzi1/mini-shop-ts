import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Product } from "./Products.types";

import styles from "./Card.module.css";

function Card({ image, title, price, rating: { rate } }: Product) {
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
              <AiOutlineStar style={{color: "orange"}} />
            ))}
          </div>
          <p>${price}</p>
        </div>
        <button>Add to Basket</button>
      </main>
    </div>
  );
}

export default Card;
