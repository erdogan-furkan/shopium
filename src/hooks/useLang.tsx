import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "../redux/store";

export default function useLang() {
  const { i18n } = useTranslation();
  const activeLang = useSelector((state) => state.theme.activeLang);

  useEffect(() => {
    i18n.changeLanguage(activeLang);
  }, [activeLang, i18n]);

  return [activeLang];
}
