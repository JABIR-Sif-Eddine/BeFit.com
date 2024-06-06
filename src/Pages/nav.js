import { Link } from "react-router-dom";
import "./style.css";

const navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-around  align-items-center">
        <a href="/">
          <img src="image.png" alt="" />
        </a>
        <Link to="/" className=" a text-black">
          Home
        </Link>
        <Link to="/Foods" className="a text-black">
          Foods
        </Link>
        <Link to="/Exercises" className="a text-black">
          Exercises
        </Link>
        <Link to="/Profile">
          <img src="pdp.png" alt="" width="50px" className="navImg" />
        </Link>
      </nav>
    </>
  );
};

export default navbar;
