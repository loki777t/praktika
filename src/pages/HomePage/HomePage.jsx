import BlockHeader from "../../components/BlockHeader/BlockHeader";
import styles from "./HomePage.module.css";
import { useGetAllCategoriesQuery } from "../../store/api/categoryApi";
import { useGetCategoryByIdQuery } from "../../store/api/categoryApi";
import { useState } from "react";
import ProductCard from "../../components/ProducrCard/ProductCard";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const { data: categories } = useGetAllCategoriesQuery();
  const { data: products } = useGetCategoryByIdQuery(1);
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${user.name}, Email: ${user.email}, Number: ${user.number}`);

    setUser({
      name: "",
      email: "",
      number: "",
    });
  };
  return (
    <>
      <div className={styles.discounts}>
        <img src="http://localhost:3000/assets/img/HomePage/bg.jpg" alt="" />

        <div className={styles.temnee}>
          <div>
            <div className={styles.text}>
              Amazing Discounts <br /> on Garden Products!
            </div>

            <div className={styles.btn}>Check out</div>
          </div>
        </div>
      </div>

      <div className={styles.categories}>
        <BlockHeader title="Categories" text="All categories" link="qwe" />

        <div className={styles.cont}>
          {categories?.slice(0, 4).map((card) => (
            <div
              key={card.id}
              className={styles.categorieCard}
              onClick={() => navigate(`/categories/${card.id}`)}
            >
              {" "}
              <div className={styles.img}>
                <img
                  src={`http://localhost:3333${card.image}`}
                  className={styles.img}
                  alt={card.title}
                />
              </div>
              {card.title}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.selectionInput}>
        <div className={styles.titleInput}>
          <h>5% off on the first order</h>
        </div>
        <div className={styles.cointainerInput}>
          <div className={styles.imgInput}>
            <img
              src="http://localhost:3000/assets/img/HomePage/inputBg.png"
              alt="hands"
            />
          </div>
          <div className={styles.feedbackInput}>
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Name"
              onChange={handleChange}
            />

            <input
              type="number"
              name="number"
              value={user.number}
              placeholder="Phone number"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
            />

            <div className={styles.btnInput}>
              <button onClick={handleSubmit}>
                {" "}
                <b>Get a discount</b>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.saleSection}>
        <BlockHeader title="Sale" text="All sales" link="qwe" />

        <div className={styles.cont}>
          {products?.data?.slice(0, 4).map((product) => (
            <ProductCard
              img={`http://localhost:3333${product.image}`}
              discount={product.discont_price}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
