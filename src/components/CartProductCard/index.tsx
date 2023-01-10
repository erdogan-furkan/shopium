import React from "react";
import s from "./styles.module.scss";
import {
  ProductCart,
  increaseProduct,
  decreaseProduct,
  removeProduct,
} from "../../redux/slices/cartSlice";
import QuantityInput from "../QuantityInput";
import { useDispatch } from "../../redux/store";

const CartProductCard: React.FC<ProductCart> = (product) => {
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeProduct(id));
  };

  const handleIncrement = (id: string) => {
    dispatch(increaseProduct(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(decreaseProduct(id));
  };

  return (
    <div className={s.card}>
      <div className={s.cardImage}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={s.cardBody}>
        <div className={s.cardInfo}>
          <h3 className={s.cardTitle}>{product.title}</h3>
          <p className={s.cardPrice}>${product.price}</p>
          <span className={s.cardDeleteButton}>Remove from Cart</span>
        </div>
        <QuantityInput
          minValue={1}
          quantity={product.quantity}
          handleDecrement={() => handleDecrement(product.id)}
          handleIncrement={() => handleIncrement(product.id)}
        />
      </div>
    </div>
  );
};

export default CartProductCard;
