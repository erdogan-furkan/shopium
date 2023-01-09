import s from "./styles.module.scss";
import { MdLanguage } from "react-icons/md";
import Select from "react-select";
import useLang from "../../hooks/useLang";

interface Language {
  value: string;
  label: string;
}

const languages: Language[] = [
  { value: "tr", label: "TR" },
  { value: "en", label: "EN" },
];

const LanguageSwitcher = () => {
  const [activeLang, setActiveLang] = useLang();

  const handleChange = (option: Language | null) => {
    setActiveLang(option?.value);
  };

  return (
    <div className={s.container}>
      <MdLanguage size={"1.5rem"} />
      <Select
        defaultValue={languages.find((lang) => lang.value === activeLang)}
        options={languages}
        onChange={handleChange}
        isSearchable={false}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "var(--color-4)",
            primary50: "transparent",
            primary: "var(--color-2)",
          },
        })}
      />
    </div>
  );
};

export default LanguageSwitcher;
