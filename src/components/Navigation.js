import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}

export default Navigation;
