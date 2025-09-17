import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductoById } from "../services/api";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

useEffect(() => {
    setLoading(true);
    setError(null);
    fetchProductoById(id)
        .then(setItem)
        .catch(e => setError(e.message))
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <main><p>Cargando detalle...</p></main>;
    if (error) return <main><p style={{color:"tomato"}}>Error: {error}</p></main>;
    if (!item) return <main><p>No se encontró el producto.</p></main>;

return (
    <main>
        <ItemDetail item={item} />
    </main>
    );
}