import React from "react";
import { NavLink } from "react-router-dom";
import "./Style/Header.css";
import logo from '../../assets/IMG/logo.jpg'

const Navbar = () => {
  return (
    <>
      <div className="navbar-main">
        <div className="logo-div">
          <NavLink to='/'>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="authentication-div">
          <ul>
            <li>
              <NavLink to="/signin">SignIn</NavLink>
            </li>
            <li>
              <NavLink to="/signup">SignUp</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
