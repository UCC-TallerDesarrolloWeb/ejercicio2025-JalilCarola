import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import { formatPrice } from "../utils/formatPrice";

function Store() {
    const [productos, setProductos] = useState([]);
    const [detalle, setDetalle] = useState(null);
    const logueado = localStorage.getItem("logueado") === "true";
    const dialogRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:4000/productos")
            .then((response) => {
                if (!response.ok) throw new Error("Error al obtener los productos");
                return response.json();
            })
            .then((data) => setProductos(data))
            .catch((error) => console.error("Hubo un error:", error));
    }, []);

    const verDetalle = (producto) => {
        setDetalle(producto);
        dialogRef.current.showModal();
    };

    const agregarAlCarrito = (producto) => {
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`"${producto.nombre}" se agregó al carrito`);
    };

    return (
        <div className="home-container">
            <h2>Tienda</h2>
            <div className="cards-grid">
                {productos.map((producto) => (
                    <Card key={producto.id} titulo={producto.nombre}>
                        <img src={`/products/${producto.imagen}`} alt={producto.nombre} />
                        <p>{formatPrice(producto.precio)}</p>
                        <button onClick={() => verDetalle(producto)}>Ver detalle</button>
                        {logueado && (
                            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
                        )}
                    </Card>
                ))}
            </div>

            <dialog ref={dialogRef}>
                {detalle && (
                    <>
                        <img src={`/products/${detalle.imagen}`} alt={detalle.nombre} style={{ width: "120px" }} />
                        <h3>{detalle.nombre}</h3>
                        <p>{detalle.descripcion}</p>
                        <p><strong>Categoría:</strong> {detalle.categoria}</p>
                        <p><strong>Marca:</strong> {detalle.marca}</p>
                        <p><strong>Precio:</strong> {formatPrice(detalle.precio)}</p>
                    </>
                )}
                <button onClick={() => dialogRef.current.close()}>Cerrar</button>
            </dialog>
        </div>
    );
}

export default Store;
