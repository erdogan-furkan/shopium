import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return <div>{t("Hello world!")}</div>;
};

export default Home;
