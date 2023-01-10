import s from "./styles.module.scss";
import { useSelector } from "../../redux/store";
import CartProductCard from "../CartProductCard";

const CartProductList = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className={s.productList}>
      {products.map((product) => (
        <CartProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default CartProductList;
