import classNames from "classnames";
import { MdClose } from "react-icons/md";
import s from "./styles.module.scss";

interface Props {
  handleClose: () => void;
  show: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ handleClose, show, children }) => {
  return (
    <div className={classNames(s.modal, { [s.show]: show })}>
      <div className={s.modalBody}>
        <button className={s.close} type="button" onClick={handleClose}>
          <MdClose size={"1.5rem"} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
