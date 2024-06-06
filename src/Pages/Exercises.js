import { Link } from "react-router-dom";
import Navbar from "./nav";
const Exercises = () => {
  return (
    <>
      <Navbar />
      <h1 className="meal">Exercises</h1>
      <div className="Exers">
        <Link to="">
          <div className="exer">
            <img src="chest.png" alt="" width={240} height={150} />
            <p>Chest</p>
          </div>
        </Link>
        <Link to="">
          <div className="exer">
            <img src="ARMS.png" alt="" width={240} height={150}/>
            <p>Arms</p>
          </div>
        </Link>
        <Link to="">
          <div className="exer">
            <img src="back.png" alt="" width={240} height={150} />
            <p>Back</p>
          </div>
        </Link>
        <Link to="">
          <div className="exer">
            <img src="SHOULDERS.png" alt=""width={240} height={150} />
            <p>Shoulders</p>
          </div>
        </Link>
        <Link to="">
          <div className="exer">
            <img src="chest.png" alt="" width={240} height={150} />
            <p>Chest</p>
          </div>
        </Link>
        <Link to="">
          <div className="exer">
            <img src="ARMS.png" alt="" width={240} height={150}/>
            <p>Arms</p>
          </div>
        </Link>
        <Link to="">
          <div className="exer">
            <img src="back.png" alt="" width={240} height={150} />
            <p>Back</p>
          </div>
        </Link>
        <Link to="">
          <div className="exer">
            <img src="SHOULDERS.png" alt=""width={240} height={150} />
            <p>Shoulders</p>
          </div>
        </Link>
        <Link to="">
          <div className="exer">
            <img src="SHOULDERS.png" alt=""width={240} height={150} />
            <p>Shoulders</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Exercises;
