import HeroImg from "../assets/hero-portrait.webp";

import { useTranslation } from 'react-i18next';

import {
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiFillGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const icons = [
  {
    id: 1,
    link: "https://twitter.com/OrlandoFloresH",
    icon: <AiOutlineTwitter size={40} />,
    arialabel:"Find me on x",
  },
  {
    id:2,
    link: "https://www.facebook.com/OrlandoFloresHuanca",
    icon: <AiOutlineFacebook size={40} />,
    arialabel:"Find me on facebook",
  },
  { 
    id: 3,
    link: "https://github.com/lalomax",
    icon: <AiFillGithub size={40} />,
    arialabel:"Find me on github",
  },
  {
    id: 4,
    link: "https://www.linkedin.com/in/orlando-flores365/",
    icon: <AiOutlineLinkedin size={40} />,
    arialabel:"Find me on linkedin",
  },
];

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="dark:bg-primaryDark bg-primaryLight px-5  py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="font-pacifico text-4xl lg:text-6xl lg:leading-normal">
            {t('Hi')}<br />{t('Iam')} <span className="text-accent">O</span>rlando <br />
            {t('role')}
          </h1>

          <p className="py-5 ">
            {t('Hero-description')}
          </p>

          <div className="flex py-5 gap-2 ">
            {/* Display array icons */}
            {icons.map(({id, link, icon, arialabel }) => (
              <a
                key={id}
                href={link}
                className="inline-block text-accent hover:text-slate-600 dark:hover:text-slate-400"
                target="_blank"
                aria-label={arialabel}
              >
                {icon}
              </a>
            ))}
    
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-accent text-black hover:text-white  px-6 py-3 hover:bg-primaryDark"
          >
            {t('See-Projects')}
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
