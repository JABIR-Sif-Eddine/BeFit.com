import Navbar from "./nav";
const Favorites = () => {
  return (
    <>
      <Navbar />
      <h1 className="meal">Favorites</h1>
      <div className="favorite">
      <div className="fav"></div>
      <h1>No meals added to your Favorites</h1>
      <p>
        when adding meals to your favourites , you can easily add them to your
        daily meals
      </p></div>
    </>
  );
};

export default Favorites;
