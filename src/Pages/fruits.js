import Navbar from "./nav";
import { Link } from "react-router-dom";
const Fruits = () => {
  return (
    <>
      <Navbar />
      <h1 className="meal">Fruits</h1>
      <div className="catbtn">
        <ul>
          <Link to="">
            <li>
              Apples
              <img src="arrow.png" alt="" width="20px" />
            </li>
          </Link>
          <Link to="">
            <li>
              Bananas
              <img src="arrow.png" alt="" width="20px" />
            </li>
          </Link>
          <Link to="">
            <li>
              Oranges
              <img src="arrow.png" alt="" width="20px" />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Fruits;
