import { useEffect, useState } from "react";
import Navbar from "../nav";
const Details = (props) => {
  const [Details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/${props.details}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="meal">{props.details}</h1>
      <div className="catbtn">
        <ul></ul>
        {Details.map((detail, index) => {
          if (props.details === detail.name ) {
            <ul>
              <li>carbohydrates : {Details.infos.carbo}</li>
              <li>Fats : {Details.infos.Fats}</li>
              <li>Proteins : {Details.infos.Prots}</li>
            </ul>;
          }
        })}
      </div>
    </>
  );
};

export default Details;
