import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar stickynav" id="navbar">
          <nav className="navbar">
            <Link to="/home" className="navbar">Homepage</Link>
            |
            <div className="dropdown">
              <button className="dropdown">Projects</button>
              <div className="dropdown-content">
                <Link className="dropdown" to="/dndsearch">DnDSearch</Link>
                <Link className="dropdown" to="/bomberman">Bomberman</Link>
              </div>
            </div>
            |
            <Link to="/about" className="navbar">About</Link>
          </nav>
          <hr className="navbar" />
        </div>
    )
}

export default Navbar;