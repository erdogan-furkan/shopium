import s from "./styles.module.scss";
import toast from "react-hot-toast";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { addProduct } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "../../redux/store";
import { toggleFavorite } from "../../redux/slices/favoriteSlice";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<Product> = (product) => {
  const dispatch = useDispatch();
  const productIsFavorite = useSelector(
    (state) => state.favorite.products
  ).some((item) => item.id === product.id);
  const cartHasProduct = useSelector((state) => state.cart.products).some(
    (item) => item.id === product.id
  );
  const { t } = useTranslation();

  const addToFavorites = () => {
    dispatch(toggleFavorite(product));

    if (productIsFavorite) {
      toast.success(t("Product removed from favorites successfully!"));
    } else {
      toast.success(t("Product added to favorites successfully!"));
    }
  };

  const handleOnClick = () => {
    dispatch(addProduct(product));

    toast.success(t("Product added to cart successfully!"));
  };

  return (
    <div className={s.card}>
      <div className={s.cardImage}>
        <span className={s.cardFavoriteButton} onClick={addToFavorites}>
          {productIsFavorite ? (
            <RiHeartFill size={"1.5rem"} />
          ) : (
            <RiHeartLine size={"1.5rem"} />
          )}
        </span>
        <img src={product.image} alt="" />
      </div>
      <div className={s.cardBody}>
        <h5 className={s.cardtitle}>{product.title}</h5>

        <div className={s.cardInfo}>
          <span className={s.cardPrice}>${product.price}</span>
          {cartHasProduct ? (
            <button className={s.cardAddButton}>
              <Link to={"/cart"}>{t("Go to cart")}</Link>
            </button>
          ) : (
            <button className={s.cardAddButton} onClick={handleOnClick}>
              {t("Add to cart")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
