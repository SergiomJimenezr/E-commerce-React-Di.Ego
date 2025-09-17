import ProductCard from "./ProductCard";

export default function ProductList({ items }) {
    return (
    <div id="catalogo" className="grid">
    {items.map(item => (
        <ProductCard key={item.id} producto={item} />
    ))}
    </div>
    );
}