import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Actividades from "./pages/Actividades";
import Poke from "./pages/Poke";
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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
