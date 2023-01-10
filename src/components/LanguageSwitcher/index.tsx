import s from "./styles.module.scss";
import { MdLanguage } from "react-icons/md";
import Select from "react-select";
import useLang from "../../hooks/useLang";
import classNames from "classnames";

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
        classNames={{
          control: () => s.control,
          indicatorsContainer: () => s.indicatorContainer,
          singleValue: () => s.singleValue,
          menuList: () => s.menuList,
          option: (state) =>
            classNames(s.option, { [s.selected]: state.isSelected }),
        }}
      />
    </div>
  );
};

export default LanguageSwitcher;
