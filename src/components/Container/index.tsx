import classNames from "classnames";
import s from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  fluid?: boolean;
};

const Container: React.FC<Props> = ({ children, fluid }) => {
  return (
    <div className={classNames(s.container, { [s.fluid]: fluid })}>
      {children}
    </div>
  );
};

export default Container;
