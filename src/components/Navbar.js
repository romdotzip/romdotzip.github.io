import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar" id="navbar">
          <nav className="navbar">
            <Link to="/home" className="navbar">Homepage</Link>
            |
            <Link to="/dndsearch" className="navbar">DnDSearch</Link>
            -
            <Link to="/bomberman" className="navbar">Bomberman</Link>
            |
            <Link to="/about" className="navbar">About</Link>
          </nav>
          <hr className="navbar" />
        </div>
    )
}

export default Navbar;