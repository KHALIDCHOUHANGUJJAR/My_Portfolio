import { NavLink } from "react-router-dom";
import Button from "../../utils/Constant/button/Button";

const Header = () => {
  return (
    <header className=" fixed top-0   w-full flex justify-end gap-10 items-center font-bold p-10  text-white ">
      <nav className="flex gap-4 ">
        <NavLink to="/" className="hover:text-blue-300" end>
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-blue-300">
          About
        </NavLink>
        <NavLink to="/Skill" className="hover:text-blue-300">
          Skills
        </NavLink>
        <NavLink to="/projects" className="hover:text-blue-300">
          Projects
        </NavLink>

        <NavLink to="/contact" className="hover:text-blue-300">
          Contact
        </NavLink>
      </nav>
      <a href="Assets/images/khalid_chouhan_Cv.pdf" target="_blank">
        <Button text="Resume" />
      </a>
    </header>
  );
};

export default Header;
