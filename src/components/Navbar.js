import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar" id="navbar">
          <nav className="navbar">
            <Link to="/rm0819-website/home" className="navbar">Homepage</Link>
            |
            <Link to="/rm0819-website/dndsearch" className="navbar">DnDSearch</Link>
            -
            <Link to="/rm0819-website/bomberman" className="navbar">Bomberman</Link>
            |
            <Link to="/rm0819-website/about" className="navbar">About</Link>
          </nav>
          <hr className="navbar" />
        </div>
    )
}

export default Navbar;