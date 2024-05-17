// import { useNavigate } from "react-router-dom";
const Login = () => {
    // const navigate = useNavigate();
    // const handleNavigate = () => {
    //   navigate("");
    // };
  return (
    <body className="LoginPage">
      <nav className="d-flex justify-content-around  align-items-center">
        <a href="/">
          <img src="image.png" alt="" />
        </a>
      </nav>
      <div className="Login">
        <form>
          <label>Email</label>
          <br />
          <input type="email" required />
          <br />
          <label>Password</label>
          <br />
          <input type="password" required />
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
        <img src="img1.png" alt="" width="350px" />
      </div>
    </body>
  );
};

export default Login;
