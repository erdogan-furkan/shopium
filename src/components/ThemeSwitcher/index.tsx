import useDarkMode from "../../hooks/useDarkMode";
import { toggleDarkMode } from "../../redux/slices/themeSlice";
import { useDispatch } from "../../redux/store";
import Switch from "../Switch";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();

  const [isDarkModeEnabled] = useDarkMode();
  const handleThemeChange = () => dispatch(toggleDarkMode());

  return <Switch checked={isDarkModeEnabled} onChange={handleThemeChange} />;
};

export default ThemeSwitcher;
