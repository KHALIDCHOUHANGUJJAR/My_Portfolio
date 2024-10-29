import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Project.css";
import Heading from "../../utils/Constant/Heading/Heading";

import { pro } from "../../utils/Pro";

const Projects = () => {
  return (
    <div>
      <Heading text={"My Projects"} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto p-10 rounded-lg cursor-pointer">
        {pro.map((item, index) => (
          <div
            key={index}
            className="w-[100%] h-[100%] flex rounded-2xl justify-center  md:flex-row bg-[#111827] p-4 gap-10 mb-16 shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_5px_#A092FA]"
          >
            <div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image}
                  alt={item.Name}
                  className="h-[60vh] w-[100vw]  sm:w-[50vw]  object rounded-2xl p-2 transition-shadow duration-300 cursor-pointer"
                />
              </a>
            </div>
            <div className="flex flex-col gap-8">
              <h1 className="text-2xl text-blue-300 font-bold">{item.Name}</h1>
              <p className="text-blue-200 font-mono font-bold">
                {item.Description}
              </p>
              <div className="bg-blue-600 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-6 mt-2">
                <div className="flex items-center justify-center">
                  <a
                    href={item.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="w-7 h-7 text-white transition-transform duration-300 transform hover:scale-110"
                      icon={faGithub}
                    />
                  </a>
                </div>

                <div className="flex items-center justify-center rounded-full p-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                  <a
                    href="https://your-netlify-site.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      className="w-7 h-7 text-white transition-transform duration-300 transform hover:scale-110"
                      icon={faGlobe}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
