import React,{ useEffect } from "react";
import { Link,useLocation} from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Nesw-APP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link  className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/beauty" ? "active" : ""}`} to="/beauty">
                  Beauty
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/economics" ? "active" : ""}`} to="/economics">
                  Economics
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/energy" ? "active" : ""}`} to="/energy">
                  Energy
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/finance" ? "active" : ""}`} to="/finance">
                  Finance
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/food" ? "active" : ""}`} to="/food">
                  Food
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/gaming" ? "active" : ""}`} to="/gaming">
                  Gaming
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/music" ? "active" : ""}`} to="/music">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/news" ? "active" : ""}`} to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/politics" ? "active" : ""}`} to="/politics">
                  Politics
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/science" ? "active" : ""}`} to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} to="/sport">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} to="/tech">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/travel" ? "active" : ""}`} to="/travel">
                  Travel
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/world" ? "active" : ""}`} to="/world">
                 World
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "Dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.togglemode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.btnText}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
