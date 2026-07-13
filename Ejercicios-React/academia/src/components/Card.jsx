/**
 * Componente reutilizable de tarjeta.
 * @param {string} titulo - titulo principal de la tarjeta
 * @param {string} [subtitulo] - texto secundario opcional
 * @param {React.ReactNode} children - contenido interno de la tarjeta (imagen, listas, etc)
 */
function Card({ titulo, subtitulo, children }) {
    return (
        <div className="card">
            <h3>{titulo}</h3>
            {subtitulo && <p className="card-subtitulo">{subtitulo}</p>}
            {children}
        </div>
    );
}

export default Card;
