import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.scss";

function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        if (usuario === "admin" && password === "admin") {
            console.log("Login OK");
            localStorage.setItem("logueado", "true");
            navigate("/actividades");
        } else {
            console.log("Login Incorrecto");
        }
    };

    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    );
}

export default Login;
