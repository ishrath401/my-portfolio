import "./NavBar.css";
import { Link } from "react-router-dom";

const navbar = () => {

  return (
    <>
      <div className="navbar">
        <p><Link className="name" to='/'>Mohammed Ishrath</Link></p>
        <p>Projects</p>
        <p>Experience</p>
        <p><Link className="resume" to='/resume'>Resume</Link></p>
      </div>
    </>
  );
};

export default navbar;
