import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useEffect, useState } from "react";

function getThemeFromLocalStorage() {
  return localStorage.getItem("theme") || "night";
}

function Navbar() {
  const [mode, setMode] = useState(getThemeFromLocalStorage());

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);

  const changeMode = () => {
    setMode((prev) => {
      return prev === "night" ? "fantasy" : "night";
    });
  };

  return (
    <nav className="py-3 shadow-md">
      <div className=" align-element flex justify-between items-center">
        <Link to={"/"} className="text-3xl">
          KinoPoisk
        </Link>
        <span className="text-3xl cursor-pointer" onClick={changeMode}>
          {mode === "night" ? <FaMoon /> : <FaSun />}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
