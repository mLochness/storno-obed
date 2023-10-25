import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Odhlásenie z obedov</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New blog</Link>
                <Link className="highLink" to="/login">Prihlásenie</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;