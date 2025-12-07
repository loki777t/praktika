import { useNavigate } from "react-router";
import styles from "./ProductCard.module.css";

const ProductCard = ({ img, discount, title, price, id }) => {
  console.log(img);
  const navigate = useNavigate()

  return (
    <div className={styles.card} onClick={() => navigate(`product/${id}`)}>
      <div className={styles.img}>
        <img src={img} alt={title} width="200px" />
      </div>

      {discount && <div className={styles.discount}>- {((price - discount) / price * 100).toFixed(0)}%</div>}

      <div className={styles.cont}>
        <div className={styles.name}>{title}</div>
        {price && discount ? (
          <span style={{display: "flex", alignItems: "end"}}>
            <div className={styles.price}>${discount}</div>
            <div className={styles.price_discount}>${price}</div>
          </span>
        ) : (
          <div className={styles.price}>${price}</div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
