// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { flushSync } from "react-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(!window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
// console.log(isDarkMode)
  useEffect(() => {
    // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTimeout(() => {
        
        handleThemeSwitch();
        // setIsDarkMode(true)
      }, 1000);
    // } 
  }, []);

  const handleThemeSwitch = async () => {
    await document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(isDarkMode => !isDarkMode);
        // setIsDarkMode(isDarkMode);
      });
    }).ready;
    handleToggleMenu();
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // console.log(isDarkMode);
  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <header className="flex justify-between px-5 py-2 bg-primaryDark text-slate text-white fixed w-full z-10">
      <Link to="/" className="logo text-2xl font-bold text-accent">
        Lalomax
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-1 items-center ">
          <li>
            <Link className="bg-accent transition ease-in-out delay-150  text-black hover:text-white  px-6 py-3 hover:bg-primaryDark" to="/#about">About</Link>
          </li>
          <li>
            <Link className="bg-accent  transition ease-in-out delay-150  text-black hover:text-white  px-6 py-3 hover:bg-primaryDark" to="/#projects">Projects</Link>
          </li>
          <li>
            <Link className="bg-accent  transition ease-in-out delay-150  text-black hover:text-white  px-6 py-3 hover:bg-primaryDark" to="/#contact">Contact</Link>
          </li>
          <li>
            <Link className="bg-accent  transition ease-in-out delay-150  text-black hover:text-white  px-6 py-3 hover:bg-primaryDark" to="/curriculum/#cvheader">Resume</Link>
          </li>
          <li>
            <button
              type="button"
              onClick={handleThemeSwitch}
              className="bg-primaryDark text-lg p-1 rounded-md  "
            >
              {isDarkMode ? "🌙" : "🌞"}
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
            <Link onClick={handleToggleMenu} to="/#about">About</Link>
          </li>
          <li>
            <Link onClick={handleToggleMenu} to="/#projects">Projects</Link>
          </li>
          <li>
            <Link onClick={handleToggleMenu} to="/#contact">Contact</Link>
          </li>
          <li>
            <Link onClick={handleToggleMenu} to="/curriculum">Resume</Link>
          </li>
          <li>
            <button
              type="button"
              onClick={handleThemeSwitch}
              className="bg-primaryDark text-lg p-4 rounded-md"
            >
              {isDarkMode ? "🌙" : "🌞"}
            </button>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button id="navbarButton" aria-label="navigation Button" onClick={handleToggleMenu} className="block md:hidden">
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
