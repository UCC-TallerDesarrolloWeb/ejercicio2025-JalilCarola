/**
 * Tarjeta que muestra la info basica de un Pokemon traido de la PokeAPI.
 * @param {object} pokemon - objeto pokemon tal como lo devuelve la PokeAPI
 */
function PokeCard({ pokemon }) {
    return (
        <div className="card poke-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <p>{pokemon.types.map((t) => t.type.name).join(", ")}</p>
        </div>
    );
}

export default PokeCard;
