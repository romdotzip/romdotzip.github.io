import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Navbar() {
    return (
        <div className="navbar" id="navbar">
          <nav className="navbar">
            <Link to="/home" className="navbar">Homepage</Link>
            |
            <DropdownButton className="dropdown" id="dropdown-basic-button" title="Projects">
              <div className="dropdown-content">
                <Dropdown.Item className="dropdowns" href="#/dndsearch">DnDSearch</Dropdown.Item>
                <Dropdown.Item className="dropdowns" href="#/bomberman">Bomberman</Dropdown.Item>
              </div>
            </DropdownButton>
            |
            <Link to="/about" className="navbar">About</Link>
          </nav>
          <hr className="navbar" />
        </div>
    )
}

export default Navbar;