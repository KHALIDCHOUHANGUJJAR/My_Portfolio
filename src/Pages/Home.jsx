import About from "../Component/About/About";
import Card from "../Component/Card/Card";
import Contact from "../Component/Contact/Contact";
import Header from "../Component/Header/Header";
import MulCard from "../Component/Multiple/MulCard";
import Projects from "../Component/projects/projects";
import Skill from "../Component/skills/Skill";
import Heading from "../utils/Constant/Heading/Heading";
import { mulCards } from "../utils/Mulcard";

const Home = () => {
  return (
    <>
      <Header />
      <Card />
      <About />
      <div className="flex flex-col gap-10 items-center mb-24">
        <Heading text={"What Can I do ?"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 w-full max-w-6xl">
          {mulCards.map((item, index) => (
            <MulCard key={index} data={item} />
          ))}
        </div>
      </div>
      <Skill />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
