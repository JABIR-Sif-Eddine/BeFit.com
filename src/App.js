import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddFood from "./Pages/AddFood";
import Foods from "./Pages/Foods";
import Login from "./Pages/Login";
import Favorites from "./Pages/Favorites";
import Categories from "./Pages/Categories";
import Vege from "./Pages/vege";
import Fruits from "./Pages/fruits";
import Exercises from "./Pages/Exercises";
import Calories from "./Pages/Calories";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/SignUp" element={<SignUp />}></Route>
        <Route exact path="/Profile" element={<Profile />}></Route>
        <Route exact path="/AddFood" element={<AddFood />}></Route>
        <Route exact path="/Foods" element={<Foods />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Favorites" element={<Favorites />}></Route>
        <Route exact path="/Categories" element={<Categories />}></Route>
        <Route exact path="/vege" element={<Vege />}></Route>
        <Route exact path="/fruits" element={<Fruits />}></Route>
        <Route exact path="/Exercises" element={<Exercises />}></Route>
        <Route exact path="/Calories" element={<Calories />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
