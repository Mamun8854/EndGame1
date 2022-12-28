import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-base-100  px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <a href="/">Message</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
        <a href="/" className="text-xl font-bold">
          End<span className="text-teal-600">Game</span>1
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link to="/media">Media</Link>
          </li>
          <li>
            <a href="/">Message</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <p className="mr-2">{user?.displayName}</p>
            <a href="/login" className="btn mr-2" onClick={handleLogOut}>
              Sign Out
            </a>
          </>
        ) : (
          <>
            <a href="/login" className="btn mr-2">
              Login
            </a>
            <a href="/register" className="btn">
              Register
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
