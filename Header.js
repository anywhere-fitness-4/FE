import React, { useEffect, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import aflogo1 from "../Images/aflogo1.png";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <div>
      <div>
        <div className="header">
          <div className="headrow">
            <NavLink to="/">
              <img src={aflogo1}></img>
            </NavLink>
          </div>
          {isLoggedIn ? (
            <NavLink
              className="white"
              onClick={() => {
                setIsLoggedIn(false);
                localStorage.removeItem("token");
              }}
              to="/login"
            >
              <label className="logout">Logout</label>
            </NavLink>
          ) : (
            <nav className="nav">
              <NavLink to="/register" className="white">
                Register
              </NavLink>
              <NavLink to="/login" className="white">
                Login
              </NavLink>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
