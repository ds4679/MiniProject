// import React, { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";

// const ThemeToggle = () => {
//   const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [dark]);

//   return (
//     <button onClick={() => setDark(!dark)} className="p-2">
//       {dark ? <Sun className="text-yellow-300" /> : <Moon />}
//     </button>
//   );
// };

// export default ThemeToggle;
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="p-2">
      {dark ? <Sun className="text-yellow-300" /> : <Moon />}
    </button>
  );
};

export default ThemeToggle;