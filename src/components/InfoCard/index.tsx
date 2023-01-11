import { useTranslation } from "react-i18next";
import s from "./styles.module.scss";

type Props = {
  infoMessage: string;
};

const InfoCard: React.FC<Props> = ({ infoMessage }) => {
  const { t } = useTranslation();
  return <div className={s.card}>{t(infoMessage)}</div>;
};

export default InfoCard;
