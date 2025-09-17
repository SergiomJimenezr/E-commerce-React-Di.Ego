const IVA = 0.21;

export const productos = [
    { id: "1", nombre: "Short Lino Azul",   precioSinIVA: 18000, img: "/img/ShortLinoAzul.jpeg",   categoria: "shorts" },
    { id: "2", nombre: "Short Algodón Gris",precioSinIVA: 15000, img: "/img/ShortAlgodonGris.jpeg",categoria: "shorts" },
    { id: "3", nombre: "Remera Beige",      precioSinIVA: 12000, img: "/img/RemeraBeige.jpeg",     categoria: "remeras" },
    { id: "4", nombre: "Jogger Negro",      precioSinIVA: 26000, img: "/img/Jogging.jpeg",         categoria: "joggers" },
].map(p => ({ ...p, precioConIVA: Number((p.precioSinIVA * (1 + IVA)).toFixed(2)) }));