import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../style.css";
import { signout, isAuthenticated } from "../auth/helper";
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#000000" };
  } else {
    return { color: "#787878" };
  }
};

const Menu = ({ history }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img class="nav-image" src="https://firebasestorage.googleapis.com/v0/b/enggbooks-7f009.appspot.com/o/EnggBooks(1).png?alt=media&token=a972cee8-8bcf-4a8a-8b55-c458c1ba5a63" alt="EnggBooks"></img>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link
              style={currentTab(history, "/about")}
              className="nav-link"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link style={currentTab(history, "/")} className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/getbooks")}
              className="nav-link"
              to="/getbooks"
            >
              Get Books
            </Link>
          </li>
          {isAuthenticated() && (
            <li className="nav-item ml-auto">
              <button
                className="btn btn-danger btn-sm rounded"
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                Signout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Menu);
