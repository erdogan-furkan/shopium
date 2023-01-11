import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import all translation files
import en from "./en/common.json";
import tr from "./tr/common.json";

const resources = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};

i18next.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  supportedLngs: ["en", "tr"],
});

export default i18next;
