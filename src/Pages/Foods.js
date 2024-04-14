import Navbar from "./nav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Foods = () => {
  const navigateCat = useNavigate();
  const CatNavigate = () => {
    navigateCat("/Categories");
  };
  const navigateFav = useNavigate();
  const FavNavigate = () => {
    navigateFav("/Favorites");
  };
  const navigateAdd = useNavigate();
  const AddNavigate = () => {
    navigateAdd("/AddFood");
  };
  return (
    <>
      <Navbar />
      <h1 className="meal">Foods</h1>
      <button className="foodbtn" onClick={CatNavigate}>
        <img src="catimg.png" alt="" width="60px" />
        Categories
        <img src="arrow.png" alt="" width="60px" />
      </button>

      <br />
      <button className="foodbtn" onClick={FavNavigate}>
        <img src="favimg.png" alt="" width="60px" />
        Favorites
        <img src="arrow.png" alt="" width="60px" />
      </button>
      <br />
      <button className="foodbtn"onClick={AddNavigate}>
        <img src="suggest.png" alt="" width="60px"  />
        Suggest Food We should add
        <img src="arrow.png" alt="" width="60px" />
      </button>
    </>
  );
};

export default Foods;
