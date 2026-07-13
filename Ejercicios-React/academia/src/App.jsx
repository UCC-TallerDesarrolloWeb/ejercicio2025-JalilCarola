import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Actividades from "./pages/Actividades";
import Poke from "./pages/Poke";
import Store from "./pages/Store";
import Carrito from "./pages/Carrito";
import "./styles/app.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="actividades" element={<Actividades />} />
                    <Route path="poke" element={<Poke />} />
                    <Route path="tienda" element={<Store />} />
                    <Route path="carrito" element={<Carrito />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
