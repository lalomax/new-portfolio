import { Link } from "react-router-dom";
import AboutImg from "../assets/about-orland.jpg";

const About = () => {
  return (
    <section className="dark:bg-primaryDark bg-primaryLight px-5 py-32 " id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between ">
        <div className="about-info ">
          <h2 className="text-4xl inline-block font-bold mb-5 border-b-[5px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, my name is Orlando. I'm a Frontend Developer. I like to build beautiful websites using React and
            Tailwind CSS and other technologies.
          </p>
          <p className="pb-5">
            I'm proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwindcss, and many more.
          </p>

          {/* <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p> */}

          <p>
            In my spare time I create Anki <a href="https://ankiweb.net/shared/by-author/478793435" target="_blank" className="underline">flashcards</a> about learning languages and programming.
          </p>
          <Link
            to="/curriculum"
            className="inline-block btn bg-accent  border-2 border-accent text-black hover:text-white  px-6 py-3 my-4 hover:bg-primaryDark"
          >
            Resume
          </Link>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;