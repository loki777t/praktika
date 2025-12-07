import { useSelector } from "react-redux";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className={styles.header}>
      <div className={styles.header_cont}>
        <div className={styles.logo} onClick={() => navigate('/')}>
          <img src="http://localhost:3000/assets/img/Header/logo.svg" alt="" />
        </div>

        <nav className={styles.nav}>
          <Link to="/">Main Page</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/products">All products</Link>
          <Link to="/">All sales</Link>
        </nav>

        <div className={styles.basket} onClick={() => navigate("/basket")}>
          <img src="http://localhost:3000/assets/img/Header/basket.svg" alt="" />
          {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
