import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Components/utils/global.context";

const Navbar = () => {
  const { globalState, globalDispatch } = useGlobalContext();
  const { theme } = globalState;

  const darkModeToggle = () => {
    globalDispatch({ type: "CHANGE_THEME", payload: globalState.theme });
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          Dr. Odonto
        </a>
        <div className="d-inline-flex">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favs">
                Favorites
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            className={`btn ms-3 btn-${theme === "light" ? "dark" : "light"}`}
            onClick={darkModeToggle}
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
