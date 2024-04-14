import { Link } from "react-router-dom";
import Navbar from "./nav";
const Vege = () => {
  return (
    <>
      <Navbar />
      <h1 className="meal">Vegetables</h1>
      <div className="catbtn">
        <ul>
          <Link to="">
            <li>
              Potato
              <img src="arrow.png" alt="" width="20px" />
            </li>
          </Link>
          <Link to="">
            <li>
              tomato
              <img src="arrow.png" alt="" width="20px" />
            </li>
          </Link>
          <Link to="">
            <li>
              pumpKin
              <img src="arrow.png" alt="" width="20px" />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Vege;
