import Heading from "../../utils/Constant/Heading/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { skills } from "../../utils/Skills";
const Skill = () => {
  return (
    <div className="w-[80%] mx-auto py-10">
      <Heading text={"My Skills"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 rounded-xl shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_5px_#A092FA] flex flex-col items-center"
          >
            {skill.customIcon ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className={`${skill.defaultColor} w-12 h-12 mb-4 transition-colors duration-300 hover:${skill.hoverColor}`}
              >
                <path
                  fill="#38B2AC"
                  d="M18.875 32.896c2.509 0 4.153-1.078 5.931-2.814 1.92-1.826 4.124-3.922 8.03-3.922 2.509 0 4.153 1.077 5.931 2.814 1.92 1.826 4.124 3.922 8.03 3.922 2.508 0 4.153-1.078 5.931-2.814 1.92-1.826 4.124-3.922 8.03-3.922 3.05 0 4.84 1.352 6.165 3.281 1.181 1.792 1.439 3.939 1.439 5.542-2.543 4.105-6.896 7.658-14.098 7.658-4.986 0-8.318-1.631-10.361-3.687-2.546-2.436-5.088-5.074-10.469-5.074-4.986 0-8.318 1.631-10.361 3.687-2.546 2.436-5.088 5.074-10.469 5.074-3.051 0-4.84-1.352-6.165-3.281-1.181-1.792-1.439-3.939-1.439-5.542 2.543-4.105 6.896-7.658 14.098-7.658"
                ></path>
              </svg>
            ) : (
              <FontAwesomeIcon
                icon={skill.icon}
                className={`${skill.defaultColor} text-5xl mb-4 transition-colors duration-800 hover:${skill.hoverColor}`}
              />
            )}
            <h3 className=" text-xl font-semibold text-gray-400">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
