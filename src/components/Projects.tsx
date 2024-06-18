import jobtrackr from "../assets/jobtrackr.png";
import contrata from "../assets/contrata.jpg";
import movement from "../assets/movement.jpg";
// import zepellin from "../assets/zepellin.png";
import roundpeople from "../assets/roundpeople.png";
// import pawsitive from "../assets/pawsitive.webp"

const Projects = () => {
  const projects = [
    {
      img: jobtrackr,
      title: "jobtrackr",
      desc: "An application for job tracking .",
      live: "https://14-jobtrackr.vercel.app",
      code: "https://github.com/No-Country/s14-01-m-node-react/tree/main",
    },
    {
      img: roundpeople,
      title: "Roundpeople",
      desc: "La web del emprendimiento musical",
      live: "https://s13-01-m-node-react-1.onrender.com/",
      code: "https://github.com/No-Country/s14-01-m-node-react/tree/main",
    },
    // {
    //   img: zepellin,
    //   title: "Zepellin",
    //   desc: "Sportswear trade and social support.",
    //   live: "https://zepellin.netlify.app/",
    //   code: "https://github.com/No-Country/s8-04-m-node-react-xepelin",
    // },
    // {
    //   img: pawsitive,
    //   title: "pawsitive",
    //   desc: "Take care virtual pets.",
    //   live: "https://expo.dev/artifacts/eas/kyevpALYMkfMGKYW2zoDUx.apk",
    //   code: "https://github.com/No-Country/s7-27-m-desafioreactnative",
    // },
    {
      img: contrata,
      title: "Contratá",
      desc: "A platform to connect people with qualified services.",
      live: "https://contrata.vercel.app/",
      code: "https://github.com/No-Country/S6-15-M-MERN",
    },
    {
      img: movement,
      title: "Movement",
      desc: "Sportswear trade and social support.",
      live: "https://c854pernfront-5m8om.ondigitalocean.app/home",
      code: "https://github.com/No-Country/c8-t-54-pern",
    },
  ];

  return (
    <section className="bg-primaryLight dark:bg-primaryDark text-primaryDark dark:text-primaryLight px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5 ">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React, MERN and Tailwind CSS. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img className="w-full" src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primaryDark  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                    target="_blank"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-800 font-bold"
                    target="_blank"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
