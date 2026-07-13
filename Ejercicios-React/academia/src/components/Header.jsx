import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const logueado = localStorage.getItem("logueado") === "true";

    const handleLogout = () => {
        localStorage.removeItem("logueado");
        navigate("/login");
    };

    return (
        <header className="app-header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/actividades">Actividades</Link>
                <Link to="/poke">Poke</Link>
            </nav>
            {logueado && <button onClick={handleLogout}>Logout</button>}
        </header>
    );
}

export default Header;
