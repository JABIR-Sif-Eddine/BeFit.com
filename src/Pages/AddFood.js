import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./nav";
const AddFood = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [Carbos, setCarbos] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const Meal = {
      name,
      description,
      Carbos,
      fat,
      protein,
    };
    fetch("http://localhost:8000/suggestedMeals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Meal),
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={Carbos}
          onChange={(e) => setCarbos(e.target.value)}
          placeholder="Carbos (/g)"
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
