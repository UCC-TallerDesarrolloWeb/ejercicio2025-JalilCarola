import { useEffect, useState } from "react";
import Card from "../components/Card";

function Home() {
    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/actividades")
            .then((response) => {
                if (!response.ok) throw new Error("Error al obtener las actividades");
                return response.json();
            })
            .then((data) => setActividades(data))
            .catch((error) => console.error("Hubo un error:", error));
    }, []);

    return (
        <div className="home-container">
            <h2>Nuestras Actividades</h2>
            <div className="cards-grid">
                {actividades.map((actividad) => (
                    <Card key={actividad.id} titulo={actividad.nombre}>
                        <img src={`/home/${actividad.imagen}`} alt={actividad.nombre} />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Home;
