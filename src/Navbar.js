import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Odhlásenie dieťaťa z obedov</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link className="highLink" to="/login">Prihlásenie</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;