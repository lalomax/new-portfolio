// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { flushSync } from "react-dom";
import { useTranslation } from 'react-i18next';
import i18n from "../i18n";
import ReactGA from 'react-ga4';

const Header = () => {
  
  const { t } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(!window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);


  useEffect(() => {
      setTimeout(() => {
        
        handleThemeSwitch();
      }, 1000);
  }, []);

  useEffect(() => {
    ReactGA.initialize('G-Y8PG5EEHZM');
    ReactGA.gtag('event', 'page_view', {
      page_path: '/',
      
    });
  }, []);

  const handleLanguageSwitch = () => {
    // setIsEnglish(!isEnglish);
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const handleThemeSwitch = async () => {
    await document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(isDarkMode => !isDarkMode);
        // setIsDarkMode(isDarkMode);
      });
    }).ready;
    // handleToggleMenu();
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

  function handleClick( event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
    ReactGA.event({
      category: 'Button',
      action: 'Click',
      label: event.currentTarget.innerText,
    });
  }

  return (
    <header className="flex justify-between px-5 py-2 bg-primaryDark text-slate text-white fixed w-full z-10">
      <Link to="/" className="logo text-2xl font-bold text-accent">
        Lalomax
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-1 items-center ">
          <li>
            <Link onClick={handleClick} className="bg-accent transition ease-in-out delay-150  text-black hover:text-white  px-6 py-3 hover:bg-primaryDark" to="/#about">{t('AboutMe')}</Link>
          </li>
          <li>
            <Link onClick={handleClick} className="bg-accent  transition ease-in-out delay-150  text-black hover:text-white  px-6 py-3 hover:bg-primaryDark" to="/#projects">{t('Projects')}</Link>
          </li>
          <li>
            <Link onClick={handleClick} className="bg-accent  transition ease-in-out delay-150  text-black hover:text-white  px-6 py-3 hover:bg-primaryDark" to="/#contact">{t('Contact')}</Link>
          </li>
          <li>
            <Link onClick={handleClick} className="bg-accent  transition ease-in-out delay-150  text-black hover:text-white  px-6 py-3 hover:bg-primaryDark" to="https://drive.google.com/file/d/1o2oOyqgRIoAvrSlCks5KXhiaLFbN4HXs/view" target="_blank">{t('Resume')}</Link>
          </li>
          <li>
            <button
              type="button"
              onClick={handleThemeSwitch}
              className=" text-lg p-1 rounded-md  "
            >
              {isDarkMode ? "🌙" : "☀️"}
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={handleLanguageSwitch}
              className=" text-lg p-1 rounded-md  "
            >
              {i18n.language === "en" ? "EN" : "ES"}
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={`${!toggleMenu ? "mobile-nav left-[-100%]" : "mobile-nav left-0"} `}
    
      >
        <ul className="flex flex-col  ">
          <li>
            <Link onClick={handleToggleMenu} to="/#about">{t('AboutMe')}</Link>
          </li>
          <li>
            <Link onClick={handleToggleMenu} to="/#projects">{t('Projects')}</Link>
          </li>
          <li>
            <Link onClick={handleToggleMenu} to="/#contact">{t('Contact')}</Link>
          </li>
          <li>
            <Link onClick={handleToggleMenu} to="https://drive.google.com/file/d/1o2oOyqgRIoAvrSlCks5KXhiaLFbN4HXs/view" target="_blank">{t('Resume')}</Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleThemeSwitch();
                handleToggleMenu();
              }}
              className="text-lg pl-4 rounded-md"
            >
              {isDarkMode ? "🌙" : "🌞"}
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={handleLanguageSwitch}
              className="text-lg pl-4   "
            >
              {i18n.language === "en" ? "EN" : "ES"}
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
