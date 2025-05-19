import React, { useContext } from "react";
import logo from "../assets/billLagbe-sm.jpg";
import navLinks from "../utilis/navLinks";
import { Link } from "react-router";
import AuthContext from "../provider/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

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
                <Link
                  to="/register"
                  className="btn btn-accent rounded-full bg-yellow"
                >
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
        {/* Navbar End */}
        {user ? (
          <div className="navbar-end shadow-sm">
            <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-primary rounded-xl z-1 mt-9 w-52 p-5 shadow font-bold text-white "
                >
                  <li>
                    <a className="justify-between cursor-not-allowed text-accent">{user.email}</a>
                  </li>
                  <li>
                    <a className="justify-between cursor-not-allowed">
                      My Balance :<span className="badge text-yellow">&#2547; 10,000</span>
                    </a>
                  </li>
                  <li className="hover:text-accent hover:font-black">
                   <Link to="/profile">Profile</Link>
                  </li>
                  <li className="hover:text-accent hover:font-black">
                   <Link to="/bills">My Bills</Link>
                  </li>
                  <li className="hover:text-accent hover:font-black">
                    <a onClick={() => logOut()}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar-end gap-2.5 max-lg:hidden">
            <Link
              to="/register"
              className="myBtn rounded-full bg-yellow animate-pulse"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="myBtn rounded-full border border-accent hover:bg-accent/30"
            >
              Login
            </Link>
          </div>
        )}
        {/* // Navbar End */}
        <div className="navbar-end gap-2.5 lg:hidden">
          <img className="w-24 h-24" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
