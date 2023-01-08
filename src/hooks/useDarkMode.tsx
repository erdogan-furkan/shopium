import { useEffect } from "react";
import usePrefersDarkMode from "./usePrefersDarkMode";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const prefersDarkMode = usePrefersDarkMode();
  const [isEnabled, setIsEnabled] = useLocalStorage("dark-mode", undefined);

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = window.document.documentElement;
    root.setAttribute("data-theme", enabled ? "dark" : "light");
  }, [enabled]);

  return [enabled, setIsEnabled];
}
