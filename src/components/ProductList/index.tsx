import axios from "axios";
import s from "./styles.module.scss";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import ErrorCard from "../ErrorCard";
import classNames from "classnames";
import Select from "react-select";

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

const sortOptions = [
  { value: 1, label: "Ascending" },
  { value: -1, label: "Descending" },
];

const limitString = (str: string, limit: number) =>
  str.length > limit ? `${str.substring(0, limit)}...` : str;

const ProductList = () => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(undefined);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchFilter, setSearchFilter] = useState("");
  const [sortOption, setSortOption] = useState(sortOptions[0]);

  useEffect(() => {
    if (!products || loading || error) return;

    const filtered = products.filter(
      (product) =>
        product.title.toUpperCase().indexOf(searchFilter.toUpperCase()) > -1
    );

    filtered.sort((a, b) => {
      return (a.price - b.price) * sortOption.value;
    });

    setFilteredProducts(filtered);
  }, [searchFilter, sortOption, products, loading, error]);

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
    <>
      <div className={s.productFilter}>
        <input
          className={s.searchFilter}
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.currentTarget.value)}
          placeholder="Aramak için yazın..."
        />
        <Select
          defaultValue={sortOption}
          options={sortOptions}
          onChange={(option: any) => setSortOption(option)}
          isSearchable={false}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "var(--color-1)",
              primary50: "var(--color-4)",
              primary: "black",
            },
          })}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: "none",
              background: "var(--color-4)",
            }),
          }}
        />
      </div>

      <div className={s.productList}>
        {filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            title={limitString(product.title, 50)}
            price={product.price}
            image={product.image}
            id={product.id.toString()}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
