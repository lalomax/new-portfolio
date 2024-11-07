import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import ReactGA from 'react-ga4';

import Contact from "../components/Contact";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    ReactGA.initialize('G-Y8PG5EEHZM');
    ReactGA.gtag('event', 'page_view', {
      page_path: '/',
      
    });
  }, []);
  return (
    <div className="dark:text-white text-primaryDark">
      <Hero />
      <About />
      <Projects />

      <Contact />
    </div>
  );
};

export default Home;
