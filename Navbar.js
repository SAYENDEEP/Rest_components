import React from "react";
import { Fragment, useState } from "react";
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import "../stylesheets/Navbar.css";
import logo from './assets/svg2.svg';


function Navbar() {
    
  const [state, setState] = useState({
    showCollapsedMenu: false,
    isOpen: false,
  });

  const user = useSelector(state => state.user);

  const toggleMenu = () => {
    setState({
      showCollapsedMenu: !state.showCollapsedMenu,
    });
  };

  const toggleDropdown = () => {
    setState({
      isOpen: !state.isOpen,
    });
  };

  const show = state.showCollapsedMenu ? "show" : "";
  const showDrop = state.isOpen ? "show" : "";
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          onClick={toggleMenu}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={"collapse navbar-collapse " + show}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li>
              <Link class="navbar-brand" to="/">
                <img
                  src={logo}
                  alt=""
                  style={{width:40,height:35}}
                  class="d-inline-block align-text-top"
                />
                <span style={{ marginLeft: 4 }} id="nav_logo_text">
                  {" "}
                  Been There
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <strong>HOME</strong>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="#">
                <strong>PLAN TRIP</strong>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/explore">
                <strong>EXPLORE NEARBY</strong>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown" onClick={toggleDropdown}>
                <button
                  className="btn btn-dark dropdown-toggle bg-dark"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  style={{color:"gray"}}
                >
                  <strong>PLAN TRIP</strong>
                </button>
                <div
                  className={"dropdown-menu " + showDrop}
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/kashmir">
                    Kashmir
                  </Link>
                  <Link className="dropdown-item" to="/meghalaya">
                    Meghalaya
                  </Link>
                  <Link className="dropdown-item" to="/kerala">
                    Kerala
                  </Link>
                  <Link className="dropdown-item" to="/goa">
                    Goa
                  </Link>
                  <Link className="dropdown-item" to="/gujarat">
                    Gujarat
                  </Link>
                  <Link className="dropdown-item" to="/uttarakhand">
                    Uttarakhand
                  </Link>
                </div>
              </div>
            </li>
            
          </ul>

          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              {
                !user.data?
                <Fragment>
                  <Link className="btn btn-primary" to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-outline-primary" to="/register">
                    Register
                  </Link>
                </Fragment>
                :
                <a className="btn btn-outline-warning" href="http://localhost:3001/Logout">
                  Logout
                </a>
                // <Link className="btn btn-outline-warning" to="http://localhost:3001/Logout">
                //   Logout
                // </Link>
              }
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
