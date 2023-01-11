import { RxMinus, RxPlus } from "react-icons/rx";
import s from "./styles.module.scss";

interface Props {
  minValue?: number | 0;
  maxValue?: number;
  quantity: number;
  handleIncrement: (args: any) => void;
  handleDecrement: (args: any) => void;
}

const QuantityInput: React.FC<Props> = ({
  minValue,
  maxValue,
  quantity,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div className={s.quantityWrapper}>
      <span className={s.quantityButton} onClick={handleDecrement}>
        <RxMinus />
      </span>
      <span className={s.quantity}>{quantity}</span>
      <span className={s.quantityButton} onClick={handleIncrement}>
        <RxPlus />
      </span>
    </div>
  );
};

export default QuantityInput;
