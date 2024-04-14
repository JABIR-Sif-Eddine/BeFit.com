import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [passMsg, setPasMsg] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [Objectif, setObjectif] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      userName,
      email,
      password,
      birthday,
      gender,
      height,
      weight,
      Objectif,
    };
    if (password !== repassword) {
      setPasMsg("Passwords do not match!");
      return;
    }

    fetch("http://localhost:8000/Users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log("new blog added");
    });
    navigate("/Login");
  };
  return (
    <div className="signUpPage">
      <nav className="d-flex justify-content-around  align-items-center">
        <a href="/">
          <img src="image.png" alt="" />
        </a>
      </nav>
      <div className="signUp">
        <form onSubmit={handleSubmit}>
          <label>User Name</label>
          <br />
          <input
            type="text"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>Repeat Password</label>
          <br />
          <input
            type="password"
            required
            value={repassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <br />
          <label>{passMsg}</label>
          <br />
          <label>BirthDay</label>
          <br />
          <input
            type="Date"
            required
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <br />
          <label>Height(cm)</label>
          <br />
          <input
            type="number"
            required
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <br />
          <label>Weight(kg)</label>
          <br />
          <input
            type="number"
            required
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <br />
          <label>Gender</label>
          <br />
          <select
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" key=""></option>
            <option value="Male" key="">
              Male
            </option>
            <option value="Female" key="">
              Female
            </option>
          </select>
          <br />
          <label>Objectif</label>
          <br />
          <select
            required
            value={Objectif}
            onChange={(e) => setObjectif(e.target.value)}
          >
            <option value="" key=""></option>
            <option value="Lose" key="">
              Lose Weight
            </option>
            <option value="Gain" key="">
              Gain Weight
            </option>
            <option value="mentain" key="">
              Maintain Weight
            </option>
            <option value="Build" key="">
              Build muscle
            </option>
          </select>
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
