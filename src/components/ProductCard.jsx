import { Link } from "react-router-dom";

export default function ProductCard({ producto }) {
    const { id, img, nombre, precioConIVA } = producto;

return (
    <article className="producto">
    <img className="producto-img" src={img} alt={nombre} loading="lazy" />
    <h3>{nombre}</h3>
    <p>Precio: ${precioConIVA}</p>

    <div>
        <Link to={`/item/${id}`}>
            <button type="button">Ver más</button>
        </Link>
        <button type="button" disabled>Agregar</button>
    </div>
    </article>
    );
}