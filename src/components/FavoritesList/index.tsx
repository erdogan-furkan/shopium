import s from "./styles.module.scss";
import ProductCard from "../ProductCard";
import { useSelector } from "../../redux/store";
import InfoCard from "../InfoCard";
import { useTranslation } from "react-i18next";

const ProductList = () => {
  const { t } = useTranslation();
  const favoriteProducts = useSelector((state) => state.favorite.products);

  const limitString = (str: string, limit: number) =>
    str.length > limit ? `${str.substring(0, limit)}...` : str;

  if (!favoriteProducts || favoriteProducts.length === 0) {
    return (
      <InfoCard
        infoMessage={t("There are no products in your favorite list.")}
      />
    );
  }

  return (
    <div className={s.productList}>
      {favoriteProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={limitString(product.title, 50)}
          price={product.price}
          image={product.image}
          id={product.id.toString()}
        />
      ))}
    </div>
  );
};

export default ProductList;
