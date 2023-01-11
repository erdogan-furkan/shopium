import s from "./styles.module.scss";
import { useSelector } from "../../redux/store";
import CartProductCard from "../CartProductCard";
import InfoCard from "../InfoCard";
import { useTranslation } from "react-i18next";

const CartProductList = () => {
  const { t } = useTranslation();
  const products = useSelector((state) => state.cart.products);

  const total = products.reduce((sum, { price, quantity }) => {
    return sum + price * quantity;
  }, 0);

  if (!products || products.length === 0) {
    return <InfoCard infoMessage={t("Your cart is empty.")} />;
  }

  return (
    <>
      <div className={s.productList}>
        {products.map((product) => (
          <CartProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className={s.total}>
        <span>TOTAL</span>
        <span>${total}</span>
      </div>
    </>
  );
};

export default CartProductList;
