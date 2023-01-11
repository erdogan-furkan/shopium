import { useEffect } from "react";
import usePrefersDarkMode from "./usePrefersDarkMode";
import { useSelector } from "../redux/store";

export default function useDarkMode() {
  const prefersDarkMode = usePrefersDarkMode();
  const isEnabled = useSelector((state) => state.theme.darkMode);

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = window.document.documentElement;
    root.setAttribute("data-theme", enabled ? "dark" : "light");
  }, [enabled]);

  return [enabled];
}
