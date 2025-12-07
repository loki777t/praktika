import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  updateQuantity,
} from "../../store/cartSlice";
import styles from "./basket.module.css";
import BlockHeader from "../../components/BlockHeader/BlockHeader";

const Basket = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.discont_price || item.price) * item.quantity;
  }, 0);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleIncrement = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrement = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: item.quantity - 1 }));
    }
  };

  const handleOrder = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div style={{ width: "97%", margin: "0 auto", marginTop: "50px" }}>
      <BlockHeader title="Shopping cart" text="Back to the store" link="/" />
    </div>

      <div className={styles.basketContainer}>
        <div className={styles.cartItems}>
          {cartItems.length === 0 ? (
            <p className={styles.empty}>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img
                  src={`http://localhost:3333/${item.image}`}
                  alt={item.title}
                  className={styles.itemImage}
                />
                <div className={styles.itemInfo}>
                  <div className={styles.itemhead}>
                    <h3>{item.title}</h3>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className={styles.itemRemove}
                    >
                      X
                    </button>
                  </div>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemName}>
                      <button onClick={() => handleDecrement(item.id)}>
                        -
                      </button>
                      <div className={styles.count}>
                        <p>{item.quantity}</p>
                      </div>
                      <button onClick={() => handleIncrement(item.id)}>
                        +
                      </button>
                    </span>
                    <span className={styles.itemPrice}>
                      ${item.discont_price || item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className={styles.orderDetails}>
          <h2>Order Details</h2>
          <div className={styles.priceInfo}>
            <span className={styles.originalPrice}></span>
            <span className={styles.discountedPrice}></span>
          </div>
          <div className={styles.itemCount}>
            <p>{totalItems} items</p>
          </div>
          <div className={styles.totalPrice}>
            <p>Total</p>
            <h1>${totalPrice.toFixed(2)}</h1>
          </div>

          <div className={styles.containerFeedback}>
            <div className={styles.feedback}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleOrder();
                }}
              >
                <input type="text" placeholder="Name" required />
                <input type="tel" placeholder="Phone number" required />
                <input type="email" placeholder="Email" required />
                <button type="submit" disabled={cartItems.length === 0}>
                  Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Congratulations! </h2>
            <p>
              Your order has been successfully placed on the website. <br />{" "}
              <br />
              A manager will contact you shortly to confirm your order.
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Basket;
