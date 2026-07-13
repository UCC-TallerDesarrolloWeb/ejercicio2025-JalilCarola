import Card from "../components/Card";
import { actividades, diasSemana } from "../data/actividades";

function Actividades() {
    const logueado = localStorage.getItem("logueado") === "true";

    return (
        <div className="actividades-container">
            <h2>Horarios de Actividades</h2>
            {actividades.map((actividad, index) => (
                <Card key={index} titulo={actividad.nombre} subtitulo={actividad.descripcion}>
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
