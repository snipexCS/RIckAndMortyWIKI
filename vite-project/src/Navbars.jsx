import { Link } from 'react-router-dom';
import './index.css';

function Navbars() {
  return (
    <nav className="navbar">
      <ul className="menuItems">
        <li><Link to="/" data-item="Home">Home</Link></li>
        <li><Link to="/allcharacters" data-item="Characters">Characters</Link></li>
        <li><Link to="/Merch"  data-item="Merch">Merch</Link></li>
        <li><Link to='/Quizz'  data-item="Quizz">Quizz</Link></li>
        <li><Link  data-item="Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbars;