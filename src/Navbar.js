import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>React blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link className="highLink" to="/create">New blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;