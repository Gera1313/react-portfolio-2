import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <h1>Gerardo Pérez</h1>
      <nav>
        <ul>
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;