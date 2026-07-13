import { useEffect, useState } from "react";
import Card from "../components/Card";

const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function Actividades() {
    const logueado = localStorage.getItem("logueado") === "true";
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
        <div className="actividades-container">
            <h2>Horarios de Actividades</h2>
            {actividades.map((actividad) => (
                <Card key={actividad.id} titulo={actividad.nombre} subtitulo={actividad.descripcion}>
                    <ul>
                        {actividad.horarios.map((horario, i) => (
                            <li key={i}>{diasSemana[horario.dia]}: {horario.hora}</li>
                        ))}
                    </ul>
                    {logueado && <button>Inscribirme</button>}
                </Card>
            ))}
        </div>
    );
}

export default Actividades;
