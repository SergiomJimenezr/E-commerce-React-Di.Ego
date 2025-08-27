import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CartWidget from "./components/CartWidget";

export default function App() {
  return (
    <>
      <NavBar />
      <CartWidget count={0} />
      <ItemListContainer greeting="¡Bienvenid@ a Di.Ego – Vístete con actitud!" />
    </>
  );
}