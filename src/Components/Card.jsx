import { Link } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/global.context";

const Card = ({ name, username, id }) => {
  const { globalState, globalDispatch } = useGlobalContext();
  const { theme } = globalState;

  const isFav = globalState.favs.find((fav) => fav.id === id);
  const isDark = theme === "dark";

  const addFav = () => {
    globalDispatch({ type: "ADD_FAV", payload: globalState.data[id - 1] });
  };

  const removeFav = () => {
    globalDispatch({ type: "REMOVE_FAV", payload: id });
  };

  return (
    <div className="col">
      <div className={`card w-100 text-center ${isDark && "bg-dark"}`}>
        <Link
          to={`/detail/${id}`}
          className={`text-decoration-none ${isDark && "text-light"}`}
        >
          <img src="/images/doctor.jpg" className="card-img-top" alt="Doctor" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <small className="card-text fst-italic fw-bold">{username}</small>
          </div>
        </Link>
        <div className="card-footer w-100">
          {isFav ? (
            <button
              type="button"
              onClick={removeFav}
              className="btn btn-outline-danger btn-sm text-uppercase"
            >
              Remove from favorites
            </button>
          ) : (
            <button
              type="button"
              onClick={addFav}
              className="btn btn-outline-primary btn-sm text-uppercase"
            >
              Add to favorites
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
