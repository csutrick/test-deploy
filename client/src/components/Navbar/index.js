import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Auth from "../../utils/auth";

function Navbar() {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 z-40 flex h-16 w-full flex-row flex-nowrap items-center justify-evenly bg-red-300 drop-shadow-md">
      <h2 className="text-2xl font-bold">Navbar</h2>
      {/* Login page absolute position */}
      {Auth.loggedIn() ? (
        <div onClick={logout} className="absolute right-14">
          <button classname="text-base font-bold">Logout</button>
        </div>
      ) : (
        <Link className="absolute right-14" to="/login">
          <h2 className="text-base font-bold">Login/SignUp</h2>
        </Link>
      )}
      {/* Home page absolute position */}
      <Link className="absolute left-14" to="/">
        <h2 className="text-base font-bold">Home</h2>
      </Link>
    </nav>
  );
}

export default Navbar;
