import BlockHeader from "../../components/BlockHeader/BlockHeader";
import styles from "./CategoryPage.module.css";
import { useParams } from "react-router-dom";
import { useGetCategoryByIdQuery } from "../../store/api/categoryApi";
import { useState } from "react";
import ProductCard from "../../components/ProducrCard/ProductCard";

const CategoryToIdPage = () => {
  const { id } = useParams();
  const { data: categoryData } = useGetCategoryByIdQuery(id);
  const products = categoryData?.data || [];

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  const resetFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setShowDiscounted(false);
    setSortOrder("asc");
  };

  const filteredProducts = products.filter((product) => {
    const price = product.discont_price || product.price;
    const minPriceFilter = minPrice === "" || price >= Number(minPrice);
    const maxPriceFilter = maxPrice === "" || price <= Number(maxPrice);

    const discountFilter = !showDiscounted || product.discont_price !== null;

    return minPriceFilter && maxPriceFilter && discountFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = a.discont_price || a.price;
    const priceB = b.discont_price || b.price;

    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  return (
    <div className={styles.category}>
      <BlockHeader title={categoryData?.category?.title} />

      <div className={styles.sort}>
        <div className={styles.filterPrice}>
          <p>Price</p>
          <input
            placeholder="from"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            maxLength={6}
            type="number"
          />
          <input
            type="number"
            maxLength={6}
            placeholder="to"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        <div className={styles.filterDiscount}>
          <p>Discounted items</p>
          <input
            type="checkbox"
            style={{accentColor: '#339933'}}
            checked={showDiscounted}
            onChange={(e) => setShowDiscounted(e.target.checked)}
          />
        </div>

        <div className={styles.sorted}>
          <p>Sorted</p>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">To Ascending</option>
            <option value="desc">In Descending</option>
          </select>
        </div>

        <button className={styles.resetFilters} onClick={resetFilters}>
          Reset
        </button>
      </div>

      <div className={styles.productsList}>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            img={`http://localhost:3333${product.image}`}
            discount={product.discont_price}
            price={product.price}
            title={product.title}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryToIdPage;
