import { memo, useEffect, useState } from "react";

const DarkSwitch = () => {
  const [theme, setTheme] = useState("light"); //'light' | 'dark'

  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const handleSetTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      return;
    }

    setTheme("dark");
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  };

  return (
    <>
      <button onClick={handleSetTheme} className="dark:text-gray-50">
        Dark
      </button>
    </>
  );
};

export default memo(DarkSwitch);
