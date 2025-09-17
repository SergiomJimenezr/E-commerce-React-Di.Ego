export default function ItemDetail({ item }) { 
return (
    <article className="producto" style={{ maxWidth: 520, margin: "20px auto" }}>
    <img className="producto-img" src={item.img} alt={item.nombre} />
    <h3>{item.nombre}</h3>
    <p>Precio: ${item.precioConIVA}</p>

    <div style={{display:"flex", gap:8, justifyContent:"center"}}>
        <button type="button" disabled>−</button>
        <span>1</span>
        <button type="button" disabled>+</button>
    </div>

    <button type="button" disabled style={{ marginTop:10 }}>
        Agregar al carrito
        </button>
    </article>
    );
}