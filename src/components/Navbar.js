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
            <div className="dropdown about">
              <button className="dropdown">About</button>
              <div className="dropdown-content">
                <Link className="dropdown" to="/me">rm0819</Link>
                <Link className="dropdown" to="/videos">Videos</Link>
                <Link className="dropdown" to="/accessibility">Accessibility</Link>
              </div>
            </div>
          </nav>
          <hr className="navbar" />
        </div>
    )
}

export default Navbar;