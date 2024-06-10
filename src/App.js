import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddFood from "./Pages/AddFood";
import Foods from "./Pages/Foods";
import Login from "./Pages/Login";
import Nautrition from "./Pages/Nautrition";
import Categories from "./Pages/Categories";
import Meal from "./Pages/Categories/Meal";
import Exercises from "./Pages/Exercises";
import Details from "./Pages/Categories/details";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/SignUp" element={<SignUp />}></Route>
        <Route exact path="/Profile" element={<Profile />}></Route>
        <Route exact path="/AddFood" element={<AddFood />}></Route>
        <Route exact path="/Nautrition" element={<Nautrition />}></Route>
        <Route exact path="/Foods" element={<Foods />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Categories" element={<Categories />}></Route>
        <Route exact path="/Categories/fruits" element={<Meal meal="fruits" />}></Route>
        <Route exact path="/Categories/vege" element={<Meal meal="vege" />}></Route>
        <Route exact path="/Categories/snacks" element={<Meal meal="snacks" />}></Route>
        <Route exact path="/Categories/suggestedMeals" element={<Meal meal="suggestedMeals" />}></Route>
        <Route exact path="/Exercises" element={<Exercises />}></Route>
        <Route exact path="/details/fruits" element={<Details details="fruits" />}></Route>
        <Route exact path="/details/vege" element={<Details details="vege" />}></Route>
        <Route exact path="/details/snacks" element={<Details details="snacks" />}></Route>
        <Route exact path="/details/suggestedMeals" element={<Details details="suggestedMeals" />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
