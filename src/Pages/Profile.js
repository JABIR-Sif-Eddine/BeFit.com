import Navbar from "./nav";
import "./style.css";
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="pdp">
        <img src="pdp.png" alt="" width="100px" />
        <table className="table">
          <tr>
            <th>User Name</th>
            <td>{}</td>
          </tr>
          <tr>
            <th>Birthday</th>
            <td>{}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{}</td>
          </tr>
          <tr>
            <th>Objectif</th>
            <td>
              {}
              <button className="change btn btn-primary">change</button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Profile;
