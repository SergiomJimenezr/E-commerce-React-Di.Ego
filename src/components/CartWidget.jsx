export default function CartWidget({ count = 0 }) {
    return (
    <div id="carritoHeader">
        🛒 Carrito: <span id="contadorCarrito">{count}</span>
    </div>
    );
}