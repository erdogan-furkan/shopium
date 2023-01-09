import s from "./styles.module.scss";
import ProductCard from "../ProductCard";

const ProductList = () => {
  return (
    <div className={s.productList}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
