import s from "./styles.module.scss";
import { RiHeartLine } from "react-icons/ri";

const ProductCard = () => {
  return (
    <div className={s.card}>
      <div className={s.cardImage}>
        <span className={s.cardFavoriteButton}>
          <RiHeartLine size={"1.5rem"} />
        </span>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
      </div>
      <div className={s.cardBody}>
        <h5 className={s.cardtitle}>Card title</h5>

        <div className={s.cardInfo}>
          <span className={s.cardPrice}>$599</span>
          <button className={s.cardAddButton}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
