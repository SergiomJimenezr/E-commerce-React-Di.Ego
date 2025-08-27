import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
    <header>
        <h1 className="logo">
        Di.Ego <span>Vístete con actitud</span>
        </h1>
        <CartWidget count={0} />
    </header>
    );
}