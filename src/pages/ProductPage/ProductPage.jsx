import styles from "./ProductPage.module.css";

import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../../store/api/productApi";
import { addToCart } from "../../store/cartSlice";
import { useState } from "react";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [counter, setCounter] = useState(1)
  const { data: productData } = useGetProductByIdQuery(id);
  const data = productData && productData[0];
  console.log(productData && productData[0]);

  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={`http://localhost:3333/${data?.image}`} alt="" />
      </div>

      <div className={styles.cont}>
        <div className={styles.title}>{data?.title}</div>
        <div className={styles.prices}>
          {data?.price && data?.discont_price ? (
            <span style={{ display: "flex", alignItems: "end" }}>
              <div className={styles.price}>${data?.discont_price}</div>
              <div className={styles.price_discount}>${data?.price}</div>
            </span>
          ) : (
            <div className={styles.price}>${data?.price}</div>
          )}

          {data?.discont_price && (
            <div className={styles.discount}>
              -{" "}
              {(
                ((data?.price - data?.discont_price) / data?.price) *
                100
              ).toFixed(0)}
              %
            </div>
          )}
        </div>
        <div className={styles.actions}>
          <div className={styles.buttons}>
            <div className={styles.dicrement} onClick={() => counter > 0 ? setCounter(counter - 1) : null}>-</div>
            <div className={styles.counter}>{counter}</div>
            <div className={styles.increment} onClick={() => setCounter(counter + 1)}>+</div>
          </div>

          <div className={styles.button} onClick={() => dispatch(addToCart({ product: productData[0], quantity: counter }))}>Add to cart</div>
        </div>
        <div className={styles.description}>
          <div className={styles.title}>Description</div>
          <div className={styles.text}>{data?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
