import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./nav";
import "./style.css";

const Nautrition = () => {
  return (
    <>
      <Navbar />
      <h1>Wed , 27 December 2023</h1>
      <h3 className="nautrition-title">
        <span>2.30 </span> /2455 Cal
      </h3>
      <div className="nautrition">
        <div className="nautrition-meal">
          <h4>Light Meal</h4>
          <p>2.30 Cal</p>
        </div>

        <ul>
          
        </ul>
        <Link to={"/Foods"}>
          <button>Add Food</button>
        </Link>
      </div>
      <div className="nautrition">
        <div className="nautrition-meal">
          <h4>Brakfast</h4>
          <p>2.30 Cal</p>
        </div>
        <ul>
          
        </ul>
        <Link to={"/Foods"}>
          <button>Add Food</button>
        </Link>
      </div>
      <div className="nautrition">
        <div className="nautrition-meal">
          <h4>Lunch</h4>
          <p>2.30 Cal</p>
        </div>

        <ul>
         
        </ul>
        <Link to={"/Foods"}>
          <button>Add Food</button>
        </Link>
      </div>
      <div className="nautrition">
        <div className="nautrition-meal">
          <h4>Dinner</h4>
          <p>2.30 Cal</p>
        </div>

        <ul>
          
        </ul>
        <Link to={"/Foods"}>
          <button>Add Food</button>
        </Link>
      </div>
    </>
  );
};

export default Nautrition;
