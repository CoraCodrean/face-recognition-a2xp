import React from "react";

const Nav = ({ onRouteChange }) => {
  return (
    <nav className="f3 pa3 flex justify-end ">
      <p
        className="f3 link white pointer grow"
        onClick={() => onRouteChange("signin")}
      >
        Sign out
      </p>
    </nav>
  );
};

export default Nav;
