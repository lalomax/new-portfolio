import data from "./data.json";

function Curriculum() {
  //   console.log(data);
  return (
    
      <div class="bg-primaryLight dark:bg-secondaryDark text-primaryDark dark:text-primaryLight ">
        <div class="container mx-auto py-16">
          <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 ">
            {/* First column */}
            <div class="col-span-4 sm:col-span-3 ">
              <div class="bg-secondaryLight dark:bg-primaryDark shadow rounded-lg p-6 ">
                <div class="flex flex-col items-center">
                  <img
                    src={data.urlphoto}
                    className=" w-32  rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 class="text-xl font-bold">
                    {data.name} {data.firstname}
                  </h1>
                  <p class="text-secondaryDark dark:text-secondaryLight ">{data.title}</p>
                  <div class="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="https://drive.google.com/file/d/1o2oOyqgRIoAvrSlCks5KXhiaLFbN4HXs/view?usp=sharing"
                      class="btn bg-accent  border-2 border-accent text-black hover:text-white  px-6 py-3 hover:bg-primaryDark"
                      target="_blank"
                    >
                      Download Pdf
                    </a>
                    
                  </div>
                </div>
                <hr class="my-6 border-t border-gray-300" />
                <div class="flex flex-col">
                  <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">
                    Skills
                  </span>
                  <ul>
                    {
                      // console.log(Object.entries(data.languages))
                      Object.entries(data.skills).map((skill) => {
                        return (
                          <li class="mb-2">
                            <meter
                              value={skill[1]}
                              min="0"
                              max="10"
                              title={skill[1]}
                            ></meter>{" "}
                            {skill[0]}
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              </div>
              <div class="dark:bg-primaryDark bg-secondaryLight shadow rounded-lg mt-6 p-6">
                <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">
                  Languages
                </span>
                <ul>
                  {Object.entries(data.languages).map((language) => {
                    // console.log(key,index)
                    return (
                      <li class="mb-2">
                        <meter
                          value={language[1]}
                          min="0"
                          max="10"
                          title={language[1]}
                        ></meter>{" "}
                        {language[0]}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* Second column */}
            <div class="col-span-4 sm:col-span-9 grid gap-6">
              <div class="dark:bg-primaryDark bg-secondaryLight shadow rounded-lg p-6">
                {/* Header */}
                <h2 class="text-xl font-bold mb-4">About Me</h2>
                <p class="">{data.about} </p>
                <h3 class="font-semibold text-center mt-3 -mb-2">Find me on</h3>
                {/* icons */}
                <div class="flex justify-center items-center gap-6 my-6">
                  <a
                    class=" hover:text-accent"
                    aria-label="Visit TrendyMinds LinkedIn"
                    href="https://www.linkedin.com/in/orlando-flores365/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path>
                    </svg>
                  </a>
                  {/* <a
                    class="text-gray-700 hover:text-orange-600"
                    aria-label="Visit TrendyMinds YouTube"
                    href=""
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      class="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                      ></path>
                    </svg>
                  </a> */}
                  <a
                    class=" hover:text-accent"
                    aria-label="Visit TrendyMinds Facebook"
                    href="https://www.facebook.com/OrlandoFloresHuanca"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      class="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    class=" hover:text-accent"
                    aria-label="Visit TrendyMinds Instagram"
                    href="https://www.instagram.com/lalomax365/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="h-6"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    class=" hover:text-accent"
                    aria-label="Visit TrendyMinds Twitter"
                    href="https://twitter.com/OrlandoFloresH"
                    target="_blank"
                  >
                    <svg
                      class="h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    class=" hover:text-accent"
                    aria-label="Visit TrendyMinds tiktok"
                    href="https://www.tiktok.com/@lalomax365"
                    target="_blank"
                  >
                    <svg
                      class="h-6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                      ></path>
                    </svg>
                  </a>
                </div>
                {/* Experience section */}
                <h2 class="text-xl font-bold mt-6 mb-4">Experience</h2>
                {data.experience.map((jobs) => {
                  return (
                    <div class="mb-6">
                      <div class="flex justify-between flex-wrap gap-2 w-full">
                        <span class=" font-bold">{jobs.Role}</span>
                        <p>
                          <span class=" mr-2">
                            at {jobs.Company}
                          </span>
                          <span class="">{jobs.time}</span>
                        </p>
                      </div>
                      <ul class="list-disc m-6">
                        {jobs.descriptions.map((description) => {
                          return <li>{description}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
              {/* Education Section */}
              <div class="dark:bg-primaryDark bg-secondaryLight shadow rounded-lg p-6">
                <h2 class="text-xl font-bold mt-6 mb-4">Education</h2>
                {data.education.map((college) => {
                  return (
                    <div class="mb-6">
                      <p class=" font-bold">{college.name}</p>
                      <div class="flex justify-between flex-wrap gap-2 w-full">
                        <span class=" font-bold">
                          {college.degree}
                        </span>
                        <p>
                          <span class=" mr-2">
                            {college.location}
                          </span>
                          <span class="">{college.time}</span>
                        </p>
                      </div>
                      <ul class="list-disc m-6">
                        {college.descriptions.map((description) => {
                          return <li>{description}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Curriculum;