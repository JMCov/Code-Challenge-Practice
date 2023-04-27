import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/challenges">Challenges</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;