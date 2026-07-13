import Card from "../components/Card";
import { actividades } from "../data/actividades";

function Home() {
    return (
        <div className="home-container">
            <h2>Nuestras Actividades</h2>
            <div className="cards-grid">
                {actividades.map((actividad, index) => (
                    <Card key={index} titulo={actividad.nombre}>
                        <img src={`/home/${actividad.imagen}`} alt={actividad.nombre} />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Home;
