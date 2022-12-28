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
  // className="px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mx-auto "
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
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
            {user?.uid ? (
              <>
                <p className="mb-2">{user?.displayName}</p>
                <a href="/login" className="btn mr-2" onClick={handleLogOut}>
                  Sign Out
                </a>
              </>
            ) : (
              <>
                <a href="/login" className="btn mb-2">
                  Login
                </a>
                <a href="/register" className="btn">
                  Register
                </a>
              </>
            )}
          </ul>
        </div>
        <a href="/" className="text-xl font-bold">
          End<span className="text-teal-600">Game</span>1
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
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
      <div className="navbar-end ">
        <div className="lg:block hidden">
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
    </div>
  );
};

export default Navbar;
