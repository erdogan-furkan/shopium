import s from "./styles.module.scss";
import { useSelector } from "../../redux/store";
import CartProductCard from "../CartProductCard";
import InfoCard from "../InfoCard";

const CartProductList = () => {
  const products = useSelector((state) => state.cart.products);

  if (!products || products.length === 0) {
    return <InfoCard infoMessage="Sepetinizde ürün bulunmamaktadır." />;
  }

  return (
    <div className={s.productList}>
      {products.map((product) => (
        <CartProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CartProductList;
