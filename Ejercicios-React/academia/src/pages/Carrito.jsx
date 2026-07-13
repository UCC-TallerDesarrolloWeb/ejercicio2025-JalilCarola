import { useState } from "react";
import Card from "../components/Card";
import { formatPrice } from "../utils/formatPrice";

function agruparCarrito(carrito) {
    const agrupado = [];
    carrito.forEach((producto) => {
        const existente = agrupado.find((p) => p.nombre === producto.nombre);
        if (existente) {
            existente.cantidad += 1;
        } else {
            agrupado.push({ ...producto, cantidad: 1 });
        }
    });
    return agrupado;
}

function Carrito() {
    const [carrito, setCarrito] = useState(() => JSON.parse(localStorage.getItem("carrito")) || []);

    const eliminarDelCarrito = (nombre) => {
        const actualizado = [...carrito];
        const index = actualizado.findIndex((producto) => producto.nombre === nombre);
        if (index !== -1) actualizado.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(actualizado));
        setCarrito(actualizado);
    };

    const vaciarCarrito = () => {
        localStorage.removeItem("carrito");
        setCarrito([]);
    };

    if (carrito.length === 0) {
        return (
            <div className="home-container">
                <h2>Carrito de Compras</h2>
                <p>Tu carrito está vacío.</p>
            </div>
        );
    }

    const agrupado = agruparCarrito(carrito);
    const total = carrito.reduce((acumulado, producto) => acumulado + producto.precio, 0);

    return (
        <div className="home-container">
            <h2>Carrito de Compras</h2>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <div className="cards-grid">
                {agrupado.map((producto) => (
                    <Card key={producto.nombre} titulo={producto.nombre}>
                        <img src={`/products/${producto.imagen}`} alt={producto.nombre} />
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>{formatPrice(producto.precio * producto.cantidad)}</p>
                        <button onClick={() => eliminarDelCarrito(producto.nombre)}>Eliminar</button>
                    </Card>
                ))}
            </div>
            <p>Total: {formatPrice(total)} ({carrito.length} producto/s)</p>
        </div>
    );
}

export default Carrito;
