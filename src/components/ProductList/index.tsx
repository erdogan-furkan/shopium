import axios from "axios";
import s from "./styles.module.scss";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import ErrorCard from "../ErrorCard";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
}

export interface Rating {
  rate: number;
  count: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(undefined);

  const limitString = (str: string, limit: number) =>
    str.length > limit ? `${str.substring(0, limit)}...` : str;

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("/data/products.json");

        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!products && error) {
    return <ErrorCard errMessage="DefaultError" />;
  }

  return (
    <div className={s.productList}>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          title={limitString(product.title, 50)}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;