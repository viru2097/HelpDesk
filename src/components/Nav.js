import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import "../index1.css";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import InfoIcon from "@material-ui/icons/Info";
import LaptopIcon from "@material-ui/icons/Laptop";
import ComplainIcon from "@material-ui/icons/Comment";
import LoginIcon from "@material-ui/icons/Business";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import hdiconfinal from '../images/hdiconfinal.jpg'

const Navbar = () => {
  const history = useHistory();
  const LogOut = () => {
    swal("..", "Logged Out");
    sessionStorage.clear();
    history.push("/home");
    window.location.reload();
  };
  return (
    <div className="container-fluid nav_bg ">
      <div className="row">
        <div className="col-12 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-dark n  " style={{background:"#374785"}}>
            <NavLink exact className="navbar-brand" to="/home">
            <img src={hdiconfinal} class="Logo" style={{width:"50px",height:"50px", borderRadius: 400/ 2,marginRight:"5px"}}/>
       <b>COMMUNAL HELP DESK</b></NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    exact
                    to="/home"
                  >
                    <HomeIcon></HomeIcon> Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/services"
                  >
                    <LaptopIcon></LaptopIcon> Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/about"
                  >
                    <InfoIcon></InfoIcon> About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/contact"
                  >
                    <ContactMailIcon></ContactMailIcon> Contact
                  </NavLink>
                </li>
                {sessionStorage.getItem("User Data") && (
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/complains"
                    >
                      <ComplainIcon></ComplainIcon> Complains
                    </NavLink>
                  </li>
                )}

                {sessionStorage.getItem("User Data") === null &&
                sessionStorage.getItem("Admin Data") === null ? (
                  <>
                    <a href="./Login">
                      <li className="nav-item">
                        <NavLink
                          activeClassName="menu_active"
                          className="nav-link"
                          to="/login"
                        >
                          <LoginIcon></LoginIcon> Login
                        </NavLink>
                      </li>
                    </a>
                    <li className="nav-item">
                      <NavDropdown title="Registration" id="basic-nav-dropdown">
                        <a class="dropdown-item" href="./UserRegistration">
                          User
                        </a>
                        <a class="dropdown-item" href="./Admin_registration">
                          Admin
                        </a>
                      </NavDropdown>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                {sessionStorage.getItem("User Data") && (
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/myComplain"
                    >
                      <LoginIcon></LoginIcon> MyComplain
                    </NavLink>
                  </li>
                )}
                {sessionStorage.getItem("Admin Data") && (
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/adminComplain"
                    >
                      <LoginIcon></LoginIcon> AdminComplain
                    </NavLink>
                  </li>
                )}

                {(sessionStorage.getItem("Admin Data") ||
                  sessionStorage.getItem("User Data")) && (
                  <li className="nav-item">
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                      <a class="dropdown-item" href="#">
                        Welcome,{" "}
                        {sessionStorage.getItem("User Data") &&
                          JSON.parse(sessionStorage.getItem("User Data"))
                            .firstName}{" "}
                        {sessionStorage.getItem("Admin Data") &&
                          JSON.parse(sessionStorage.getItem("Admin Data"))
                            .username}
                      </a>
                      <a class="dropdown-item" onClick={LogOut}>
                        Logout
                      </a>
                    </NavDropdown>
                  </li>
                )}

{(sessionStorage.getItem("Admin Data") ||
                  sessionStorage.getItem("User Data")) && (
                  <li className="nav-item">
                   <a class="dropdown-item" style={{color:"white"}} href="#">
                     {sessionStorage.getItem("User Data") &&
                      JSON.parse(sessionStorage.getItem("User Data"))
                        .firstName}{" "}
                    {sessionStorage.getItem("Admin Data") &&
                      JSON.parse(sessionStorage.getItem("Admin Data")).username}
                      </a> 
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
