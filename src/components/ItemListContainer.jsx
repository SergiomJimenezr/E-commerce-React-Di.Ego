import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductos } from "../services/api";
import ProductList from "./ProductList";

export default function ItemListContainer({ greeting }) {
    const { categoryId } = useParams(); 
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
    setLoading(true);
    setError(null);
    fetchProductos(categoryId)
        .then(setItems)
        .catch(e => setError(e.message))
        .finally(() => setLoading(false));
    }, [categoryId]); 

    return (
    <main>
    <section>
        <h2>{greeting}</h2>
        {loading && <p>Cargando productos...</p>}
        {error && <p style={{color:"tomato"}}>Error: {error}</p>}
        {!loading && !error && <ProductList items={items} />}
    </section>
    </main>
    );
}