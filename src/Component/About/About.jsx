import Heading from "../../utils/Constant/Heading/Heading";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <> 
      <Heading text={"About ?"} />

      <div className="w-[60%] flex flex-col leading-8 justify-center m-24 ml-[20%]">
        <p className="text-white font-mono font-bold">
          I’m a skilled Frontend Developer with a passion for creating innovative web applications.
        </p>
        <p className="text-white font-mono font-bold">
          My expertise lies in designing user-friendly interfaces and writing efficient code.
        </p>
        <p className="text-white font-mono font-bold">
          I stay updated with the latest technologies and trends to provide modern web solutions.
        </p>
        <p className="text-white font-mono font-bold">
          My projects blend creativity and attention to detail to enhance the user experience.
        </p>
        <p className="text-white font-mono font-bold">
          I view each project as a challenge and strive to deliver new and excellent solutions every time.
        </p>
        <br />
        <h2 className="underline text-xl font-mono font-bold">"Personality"</h2>
        <br />
        <p className="text-white font-mono font-bold">
          I am a social person who likes to work with a team and be collaborative.
        </p>
        <p className="text-white font-mono font-bold">
          I like to deal with honesty and transparency in order to gain the trust of the people around me.
        </p>
        <p className="text-white font-mono font-bold">
          I am passionate about my work and love creativity and constant learning.
        </p>
        <p className="text-white font-mono font-bold">
          You can tell when you get to know me.
        </p>
      </div>
    </> 
  );
};

export default About;
