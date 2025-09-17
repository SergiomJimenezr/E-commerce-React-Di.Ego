import { productos } from "../data/productos";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export async function fetchProductos(categoryId) {
    await delay(600); 
    if (!categoryId) return productos;
    return productos.filter(p => p.categoria === categoryId);
}


export async function fetchProductoById(id) {
    await delay(500);
    const prod = productos.find(p => p.id === id);
    if (!prod) throw new Error("Producto no encontrado");
    return prod;
}