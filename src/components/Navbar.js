import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <navbar class="navbar">
      <div class="navbar-left">
        <h3 class="nav-item">
          <Link to="/plants">Plants</Link>
        </h3>
        <h3 class="nav-item">
          <Link to="/coffee">Coffee</Link>
        </h3>
      </div>
      <div className="navbar-center">
        <h3 class="nav-item">
          <Link to="/">PlantShed</Link>
        </h3>
      </div>
      <div class="navbar-right">
        <h3 class="nav-item">
          <Link to="/cart">Cart</Link>
        </h3>
      </div>
    </navbar>
  );
}
