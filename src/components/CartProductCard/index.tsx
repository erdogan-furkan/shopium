import React, { useState } from "react";
import toast from "react-hot-toast";

import s from "./styles.module.scss";
import {
  ProductCart,
  increaseProduct,
  decreaseProduct,
  removeProduct,
} from "../../redux/slices/cartSlice";
import QuantityInput from "../QuantityInput";
import { useDispatch, useSelector } from "../../redux/store";
import Modal from "../Modal";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const CartProductCard: React.FC<ProductCart> = (product) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const productIsFavorite = useSelector(
    (state) => state.favorite.products
  ).some((item) => item.id === product.id);
  const [showModal, setShowModal] = useState(false);

  const handleRemoveAndFavorite = () => {
    dispatch(toggleFavorite(product));
    dispatch(removeProduct(product.id));
    toast.success(
      t("Product has been removed from the cart and added to favourites!")
    );
  };

  const handleRemove = () => {
    dispatch(removeProduct(product.id));
    toast.success(t("Product removed from cart successfully!"));
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
        <div className={s.cardContent}>
          <div className={s.cardInfo}>
            <h3 className={s.cardTitle}>{product.title}</h3>
            <p className={s.cardPrice}>${product.price}</p>
          </div>
          <QuantityInput
            minValue={1}
            quantity={product.quantity}
            handleDecrement={() => handleDecrement(product.id)}
            handleIncrement={() => handleIncrement(product.id)}
          />
        </div>
        <span className={s.cardDeleteButton} onClick={() => setShowModal(true)}>
          {t("Remove from Cart")}
        </span>
      </div>

      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <div className={s.modal}>
          <p className={s.modalHeader}>
            {t("Are you sure you want to remove the product from the cart?")}
          </p>
          <div className={s.modalActions}>
            <button className={s.modalRemoveButton} onClick={handleRemove}>
              {t("Remove product from cart")}
            </button>
            <button
              className={classNames(s.modalFavoriteButton, {
                [s.hide]: productIsFavorite,
              })}
              onClick={handleRemoveAndFavorite}
            >
              {t("Remove product from cart and add to favorites")}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CartProductCard;
