import { useEffect, useState } from "react";
import Navbar from "./nav";
import { Link } from "react-router-dom";
const Categories = () => {
  const [categories,setCategories] = useState([])
  useEffect(
    () => {
      fetch("http://localhost:8000/categories")
      .then(response => response.json())
      .then(data=>setCategories(data))
    },[]
  )
  return (
    <>
      <Navbar />
      <div className="Catego">
          {categories.map((list, index) => {
            return (
              <Link key={index} className="CategoriesImg" to={`/Categories/${list.name}`}>
              <img className="vege" src={`${list.name}.png`} alt="vege" width="200px" />
              <p>{list.name}</p>
            </Link>
            )
          })}
      </div>
    </>
  );
};

export default Categories;
