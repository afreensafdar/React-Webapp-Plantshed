import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <navbar>
      <div>
        <ul>
          <li>
            <Link to="/plants">Plants</Link>
          </li>
          <li>
            <Link to="/coffee">Coffee</Link>
          </li>
          <li>
            <Link to="/cart">My Cart</Link>
          </li>
        </ul>
      </div>
    </navbar>
  );
}
