import { Link } from 'react-router-dom';

const NoPage = () => {
    return (
        <div className="noPage">
            <h1 className="_404">404</h1>
            <p className="notfound">Page not found</p>
            <p>This is not the page you are looking for...</p>
            <p>Oh wait, is it? Whoops, well it doesn't exist. Click <Link to="/rm0819-website/home">here</Link> to go back to the homepage.</p>
        </div>
    )
}

export default NoPage;