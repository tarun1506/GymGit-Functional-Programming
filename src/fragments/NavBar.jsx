import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar bg-body-tertiarynavbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="src/assets/icons8-dumbell-100.png"
              alt="Bootstrap"
              width={70}
              height={50}
            />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-outline-dark"
              // onClick={this.handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
