import Navbar from "./nav";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <>
      <Navbar />
      <div className="Catego">
        <Link className="CategoriesImg" to="/vege">
          <img className="vege" src="vege.png" alt="" width="200px" />
        </Link>
        <Link className="CategoriesImg" to="/Fruits">
          <img className="fruits" src="Fruits.png" alt="" />
        </Link>
        {/* <Link className="CategoriesImg" to="" ><img className="col" src="vege.png" alt="" /></Link>
        <Link className="CategoriesImg" to="" ><img className="col" src="Fruits.png" alt="" /></Link>
        <Link className="CategoriesImg" to="" ><img className="col" src="vege.png" alt="" /></Link>
        <Link className="CategoriesImg" to="" ><img className="col" src="Fruits.png" alt="" /></Link>
        <Link className="CategoriesImg" to="" ><img  src="vege.png" alt="" /></Link> 
        <Link className="CategoriesImg" to="" > <img  src="Fruits.png" alt="" /></Link> */}
      </div>
    </>
  );
};

export default Categories;
