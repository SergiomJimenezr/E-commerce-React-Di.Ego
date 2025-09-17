import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenid@ a Di.Ego – Vístete con actitud!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo filtrado" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 style={{padding:16}}>404 – Página no encontrada</h2>} />
      </Routes>
    </>
  );
}