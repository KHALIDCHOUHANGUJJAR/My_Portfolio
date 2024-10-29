import { intro } from "../../utils/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Card = () => {
  const { h2Text, NameText, jbDes, pText } = intro;
  return (
    <div>
      <div className="w-[100%] text-gray-200 flex items-center justify-center p-10 mt-28 shadow-2xl shadow-white-500/50">
        <div className=" bg-[#323740] w-[80%] p-10 rounded-2xl flex items-center shadow-[0_0_15px_5px_rgba(109,132,217,0.7)]  ">
          <div className="">
            <h5 className="text-2xl font-mono">{h2Text}</h5>
            <br />
            <h1 className="font-Roboto font-bold text-[6vh]">{NameText}</h1>
            <span className="text-xl font-bold m-4 text-[#5983ad]">
              {jbDes}
            </span>
            <p className="m-4 p-4 font-semi-bold font-bold w-[50vw]">{pText}</p>
            <div className="flex items-center gap-4">
              <div className="border-2 border-solid flex items-center border-gray-500 rounded-[100%] p-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
                <a
                  href="https://github.com/KHALIDCHOUHANGUJJAR/khalidchouhandeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="w-7 h-7 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 rounded-xl"
                    icon={faGithub}
                  />
                </a>
              </div>
              <div className="border-2 border-solid flex items-center border-gray-500 rounded-[100%] p-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
                <a
                  href="https://www.linkedin.com/in/khalid-chouhan-427a222a6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="w-7 h-7 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 rounded-xl"
                    icon={faLinkedin}
                  />
                </a>
              </div>
              <div className="border-2 border-solid flex items-center border-gray-500 rounded-[100%] p-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
                <a href="mailto:Khalidchuhan7886@gmail.com">
                  <FontAwesomeIcon
                    className="w-7 h-7 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 rounded-xl"
                    icon={faEnvelope}
                  />
                </a>
              </div>
              <div className="border-2 border-solid flex items-center border-gray-500 rounded-[100%] p-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
                <a href="https://wa.me/923485020076" target="_blank">
                  <FontAwesomeIcon
                    className="w-7 h-7 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 rounded-xl"
                    icon={faWhatsapp}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full h-full relative  rounded-[100%]">
            <img
              src="/Assets/images/Portfolio_img(2).png"
              alt="Image KHALIDCHOUHANGUJJAR"
              className="  rounded-full mx-auto  z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
