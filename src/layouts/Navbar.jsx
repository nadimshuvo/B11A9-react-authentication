import React from "react";
import logo from "../assets/billLagbe-sm.jpg";
import navLinks from "../utilis/navLinks";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-primary">
      <div className="navbar shadow-sm container mx-auto h-24 px-2.5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="px-2.5 py-2.5 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="#FFB300"
                viewBox="0 0 24 24"
                stroke="#FFB300"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-primary rounded-xl z-1 mt-10 w-56 p-5 shadow gap-2"
            >
              {navLinks}
              <div className="navbar-end justify-between gap-7 lg:hidden">
                <Link to="/register" className="btn btn-accent rounded-full bg-yellow">
                  Register
                </Link>
                <Link
                  to="/login"
                  className="btn text-white border border-accent rounded-full hover:bg-accent/30"
                >
                  Login
                </Link>
              </div>
            </ul>
          </div>
          <img className="w-24 h-24 max-lg:hidden" src={logo} alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2.5 max-lg:hidden">
          <Link to="/register" className="myBtn rounded-full bg-yellow">
            Register
          </Link>
          <Link
            to="/login"
            className="myBtn rounded-full border border-accent hover:bg-accent/30"
          >
            Login
          </Link>
        </div>
        <div className="navbar-end gap-2.5 lg:hidden">
          <img className="w-24 h-24" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
