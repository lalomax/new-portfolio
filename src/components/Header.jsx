// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [theme, setTheme] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  console.log(theme);
  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <header className="flex justify-between px-5 py-2 bg-primaryDark text-slate text-white fixed w-full z-10">
      <Link to="/" className="logo text-2xl font-bold text-accent">
        Lalomax
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
          <li>
            <Link to="/curriculum/#cvheader">Resume</Link>
          </li>
          <li>
            <button
              type="button"
              onClick={handleThemeSwitch}
              className="bg-primaryDark text-lg p-1 rounded-md"
            >
              {theme === "dark" ? "🌙" : "🌞"}
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={
          !toggleMenu ? "mobile-nav left-[-100%]" : "mobile-nav left-0"
        }
      >
        <ul className="flex flex-col">
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#projects">Projects</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
          <li>
            <Link to="/curriculum">Resume</Link>
          </li>
          <li>
            <button
              type="button"
              onClick={handleThemeSwitch}
              className="bg-primaryDark text-lg p-4 rounded-md"
            >
              {theme === "dark" ? "🌙" : "🌞"}
            </button>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggleMenu} className="block md:hidden">
        {!toggleMenu ? (
          <AiOutlineMenu size={30} />
        ) : (
          <AiOutlineClose size={30} />
        )}
      </button>
    </header>
  );
};

export default Header;
