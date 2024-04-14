import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./nav";
const AddFood = () => {
  const [mealName, setMealName] = useState("");
  const [description, setDescription] = useState("");
  const [glusides, setGlusides] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      mealName,
      description,
      glusides,
      protein,
      fat,
    };
      fetch("http://localhost:8000/Meals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      alert("Meal Added");
      navigate("/Foods");
  };
  return (
    <>
      <Navbar />
      <h1 className="meal">Add Meal</h1>
      <form onSubmit={handleSubmit} className="addfood">
        <input
          type="text"
          required
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          placeholder="Meal Name"
        />
        <br />
        <input
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <br />

        <input
          type="number"
          required
          value={glusides}
          onChange={(e) => setGlusides(e.target.value)}
          placeholder="Glusides (/g)"
        />
        <br />

        <input
          type="number"
          required
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
          placeholder=" Protein (/g)"
        />
        <br />

        <input
          type="number"
          required
          value={fat}
          onChange={(e) => setFat(e.target.value)}
          placeholder="FAT(/g)"
        />
        <br />
        <button className=" button3 btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default AddFood;
