import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import Categories from './pages/CategoriesPage/CategoriesPage';
import CategoryToIdPage from './pages/CategoryPage/CategoryPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Basket from './pages/basket/BasketPage';
import NotFound from './pages/error/ErrorC';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryToIdPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
