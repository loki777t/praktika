import BlockHeader from "../../components/BlockHeader/BlockHeader";
import styles from "./CategoriesPage.module.css";
import { useGetAllCategoriesQuery } from "../../store/api/categoryApi";
import { useNavigate } from "react-router";

const Categories = () => {
  const navigate = useNavigate();
  const { data: categories } = useGetAllCategoriesQuery();
  return (
    <div className={styles.categories}>
      <BlockHeader title="Categories" />

      <div className={styles.cards}>
        {categories?.map((card) => (
            <div key={card.id} className={styles.categorieCard} onClick={() => navigate(`/categories/${card.id}`)}>
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
  );
};

export default Categories;
