import { Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Projects from "./Component/projects/projects";
import Contact from "./Component/Contact/Contact";
import Home from "./Pages/Home";
import Header from "./Component/Header/Header";
import Skill from "./Component/skills/Skill";
import Error from "./Component/Error";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
