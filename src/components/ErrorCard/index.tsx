import { useTranslation } from "react-i18next";
import s from "./styles.module.scss";

type Props = {
  errMessage: string;
};

const ErrorCard: React.FC<Props> = ({ errMessage }) => {
  const { t } = useTranslation();
  return <div className={s.card}>{t(errMessage)}</div>;
};

export default ErrorCard;
