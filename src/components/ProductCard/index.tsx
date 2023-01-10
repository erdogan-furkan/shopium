import s from "./styles.module.scss";
import { RiHeartLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

interface Product {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<Product> = ({ title, price, image }) => {
  const { t } = useTranslation();

  return (
    <div className={s.card}>
      <div className={s.cardImage}>
        <span className={s.cardFavoriteButton}>
          <RiHeartLine size={"1.5rem"} />
        </span>
        <img src={image} alt="" />
      </div>
      <div className={s.cardBody}>
        <h5 className={s.cardtitle}>{title}</h5>

        <div className={s.cardInfo}>
          <span className={s.cardPrice}>${price}</span>
          <button className={s.cardAddButton}>{t("Add to cart")}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
