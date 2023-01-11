import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { useTranslation } from "react-i18next";

export default function useLang() {
  const { i18n } = useTranslation();

  const [activeLang, setActiveLang] = useLocalStorage(
    "i18nextLng",
    i18n.language
  );

  useEffect(() => {
    i18n.changeLanguage(activeLang);
  }, [activeLang, i18n]);

  return [activeLang, setActiveLang];
}
