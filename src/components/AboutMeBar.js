import { Link } from 'react-router-dom';

function AboutMeBar() {
    return (
        <div className={`aboutPage aboutNav`}>
            <nav className="navbar">
                <Link to="/rm0819-website/videos" className="navbar">Videos</Link>
            </nav>
            <hr className="navbar" />
        </div>
    );
}

export default AboutMeBar;