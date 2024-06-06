import Navbar from "../nav";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Meal = (props) => {
  const [Meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/${props.meal}`)
      .then((response) => response.json())
      .then((data) => setMeals(data));
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="meal">{props.meal}</h1>
      <div className="catbtn">
        <ul>
          {Meals.map((Meal, index) => {
            return (
              <Link key={index} to={`/details/${props.meal}`}>
                <li>
                  {Meal.name}
                  <img src="arrow.png" alt="" width="20px" />
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Meal;
