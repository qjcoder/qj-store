import { useEffect, useContext } from "react";

import "./home.scss";

import Banner from "./banner/banner";
import Category from "../home/category/category";
import Products from "../products/products";
import { fecthDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fecthDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };
  const getProducts = () => {
    fecthDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
