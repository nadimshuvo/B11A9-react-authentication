import React, { useContext } from "react";
import logo from "../assets/billLagbe-sm.jpg";
import navLinks from "../utilis/navLinks";
import { Link } from "react-router";
import AuthContext from "../provider/AuthContext";
import avatar from "../assets/hacker.png";
import Loading from "../components/Loading";

const Navbar = () => {
  const { balance, user, logOut } = useContext(AuthContext);

  return (
    <header className="bg-primary">
      <div className="navbar container mx-auto h-24 pl-5 shadow-sm">
        <div className="navbar-start">
          {/* Mobile Menu */}
          {user ? (
            <div className="navbar-start shadow-sm lg:hidden">
              <div className="flex gap-2">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="User Avatar"
                        src={`${user?.photoURL || avatar}`}
                        className="h-10 w-10 rounded-full"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-primary z-1 mt-10 mr-[-171px] w-auto min-w-52 rounded-xl p-5 font-bold text-white shadow"
                  >
                    <li>
                      <a className="text-secondary cursor-not-allowed justify-between">
                        {user.email}
                      </a>
                    </li>
                    <li>
                      <a className="cursor-not-allowed justify-between">
                        My Balance :
                        <span className="badge text-yellow">
                          &#2547; {balance}
                        </span>
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
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="px-2.5 py-2.5 lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-primary z-1 mt-10 w-56 gap-2 rounded-xl p-5 shadow"
              >
                {navLinks}
                <div className="navbar-end justify-between gap-7 lg:hidden">
                  <Link
                    to="/register"
                    className="btn btn-accent bg-yellow rounded-full"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="btn border-accent hover:bg-accent/30 rounded-full border text-white"
                  >
                    Login
                  </Link>
                </div>
              </ul>
            </div>
          )}
          <img className="h-24 w-24 max-lg:hidden" src={logo} alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5">{navLinks}</ul>
        </div>
        {/* Navbar End */}
        {user ? (
          <div className="lg:navbar-end hidden shadow-sm">
            <div className="flex gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User Avatar"
                      src={`${user?.photoURL || avatar}`}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-primary z-1 mt-9 w-auto min-w-52 rounded-xl p-5 font-bold text-white shadow"
                >
                  <li>
                    <a className="text-secondary cursor-not-allowed justify-between">
                      {user.email}
                    </a>
                  </li>
                  <li>
                    <a className="cursor-not-allowed justify-between">
                      My Balance :
                      <span className="badge text-yellow">
                        &#2547; {balance}
                      </span>
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
              className="myBtn bg-yellow animate-pulse rounded-full"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="myBtn border-accent hover:bg-accent/30 rounded-full border"
            >
              Login
            </Link>
          </div>
        )}
        {/* // Navbar End */}
        <div className="navbar-end gap-2.5 lg:hidden">
          <img className="h-24 w-24" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
