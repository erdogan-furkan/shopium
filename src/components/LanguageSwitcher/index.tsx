import s from "./styles.module.scss";
import { MdLanguage } from "react-icons/md";
import useLang from "../../hooks/useLang";
import { useDispatch } from "../../redux/store";
import { setActiveLang } from "../../redux/slices/themeSlice";

interface Language {
  value: string;
  label: string;
}

const languages: Language[] = [
  { value: "tr", label: "TR" },
  { value: "en", label: "EN" },
];

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const [activeLang] = useLang();

  const handleChange = (e: any) => {
    dispatch(setActiveLang(e.currentTarget.value as string));
  };

  return (
    <div className={s.container}>
      <MdLanguage size={"1.5rem"} />
      <select className={s.languageSwitcher} onChange={handleChange}>
        {languages.map((lang) => (
          <option
            key={lang.value}
            value={lang.value}
            selected={lang.value === activeLang}
          >
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
