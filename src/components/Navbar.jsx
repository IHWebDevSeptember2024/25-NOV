import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/example-1">Example 1</NavLink>
        </li>
        <li>
          <NavLink to="/example-2">Example 2</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
