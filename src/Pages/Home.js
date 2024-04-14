import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <>
      <nav
        className="d-flex justify-content-around  align-items-center"
        id="nav"
      >
        <img src="image.png"></img>
        <Link to="/" className=" a text-black">
          Home
        </Link>
        <Link to="/Foods" className="a text-black">
          Foods
        </Link>
        <Link to="/Calories" className="a text-black">
          Calories
        </Link>
        <Link to="/Exercises" className="a text-black">
          Exercises
        </Link>
        <Link to="/Login">
          {" "}
          <button className="btn btn-warning ">Login</button>
        </Link>
      </nav>
      <a href="#nav" className="toNav">
        <img src="arrowUp.png" alt="" width="20px" />
      </a>
      <section className=" s1 d-flex justify-content-around  align-items-center ">
        <div className="d1">
          <h2>Reach your goals with BeFit</h2>
          <p>
            BeFit empowers you to reach your fitness goals. Access tailored
            workouts, personalized nutrition advice, Start your journey to a
            healthier, more vibrant life with us.
          </p>
          <Link to="/signUp">
            <button className="btn btn-warning">Get Starter</button>
          </Link>
        </div>
        <img src="img1.png" alt="1"></img>
      </section>
      <h1>Hit your health goals effortlessly with BeFit's</h1>
      <section>
        <div className=" s1 d-flex justify-content-around  align-items-center ">
          <img src="img2.png" alt="img2"></img>
          <div className="d1">
            <h2>Track food, fitness & fasting</h2>
            <p>Effortlessly track your calories and macros with BeFit.</p>
          </div>
        </div>
        <div className="  d-flex justify-content-around  align-items-center ">
          <div className="d1">
            <h2>Keep Tabs on Diet, Workouts & Fasting</h2>
            <p>
              Success thrives on consistency. By monitoring your diet, workouts,
              and fasting, you pave the way for a healthier, more balanced life
            </p>
          </div>
          <img src="img3.png" alt="img3"></img>
        </div>
        <div className=" d-flex justify-content-around  align-items-center ">
          <img src="img4.png" alt="img4"></img>
          <div className="d1">
            <h2>Change your habits and reach your goals</h2>
            <p>
              Now you have the tools and knowledge to build healthy habits for
              life.
            </p>
          </div>
        </div>
      </section>
      <Link to="/signUp">
        <button className=" button2 btn btn-warning btn-lg">Get Started</button>
      </Link>
      <section className=" d-flex justify-content-around  align-items-center">
        <div>
          <h1>Tools Fot Your Goals</h1>
          <p className="BMI fw-bold">
            Are you trying to lose weight, tone up, lower your BMI or improve
            your overall health? We give you the right features to achieve this.
          </p>
        </div>
      </section>
      <section className="s2 d-flex justify-content-around  align-items-start">
        <div>
          <h2>Section "Nautrition"</h2>
          <img src="img5.png"></img>
          <p>
            The site must calculate the calorie intake for each meal and update
            the daily intake in real time. Users can search foods by name and
            add them to their food diary.
          </p>
        </div>
        <div>
          <h2>Section "Exercices"</h2>
          <img src="img6.png"></img>
          <p>
            Users can access a library of exercise This section allows users to
            view videos and images illustrating exercises probably related to
            sports practice, fitness or other similar activities.
          </p>
        </div>
        <div>
          <h2>Calories Calculation</h2>
          <img src="img7.png"></img>
          <p>
            Offer the ability to record meals consumed to calculate real-time
            caloric intake and monitor progress.
          </p>
        </div>
      </section>
      <section className="contact">
        <label className="fw-bolder fs-1">Contact US</label>
        <br />
        <input type="text" placeholder="Name" />
        <br />
        <input type="text" placeholder="E-mail" />
        <br />
        <input type="text" placeholder="Phone" />
        <br />
        <textarea cols="30" rows="10"></textarea>
        <br />
        <button className="btn btn-warning">Send Message</button>
      </section>
      <footer className="d-flex justify-content-center  ">
        <img src="copyright.png" alt="" width={40} />
        <p>CopyRight BeFit All rights reserved</p>
      </footer>
    </>
  );
};

export default Home;
