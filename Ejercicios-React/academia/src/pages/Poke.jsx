import { useEffect, useState } from "react";
import PokeCard from "../components/PokeCard";

function Poke() {
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        const ids = Array.from({ length: 20 }, (_, i) => i + 1);

        Promise.all(
            ids.map((id) =>
                fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
                    if (!response.ok) throw new Error("Error al obtener el pokemon " + id);
                    return response.json();
                })
            )
        )
            .then((data) => setPokemones(data))
            .catch((error) => console.error("Hubo un error:", error));
    }, []);

    return (
        <div className="poke-container">
            <h2>Pokédex</h2>
            <div className="cards-grid">
                {pokemones.map((pokemon) => (
                    <PokeCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export default Poke;
