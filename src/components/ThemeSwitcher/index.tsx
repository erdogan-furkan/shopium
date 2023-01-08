import useDarkMode from "../../hooks/useDarkMode";
import Switch from "../Switch";

const ThemeSwitcher = () => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useDarkMode();
  const handleThemeChange = () => setIsDarkModeEnabled(!isDarkModeEnabled);

  return <Switch checked={isDarkModeEnabled} onChange={handleThemeChange} />;
};

export default ThemeSwitcher;
