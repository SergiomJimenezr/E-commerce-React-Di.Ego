import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const categorias = [
    { slug: "remeras", label: "Remeras" },
    { slug: "shorts", label: "Shorts" },
    { slug: "joggers", label: "Joggers" },
];

export default function NavBar() {
    return (
    <header>
    <h1 className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
        Di.Ego <span>Vístete con actitud</span>
        </Link>
    </h1>

    <nav className="links" style={{ display:"flex", gap:16, justifyContent:"center", marginBottom:12 }}>
        <NavLink to="/" end>Inicio</NavLink>
        {categorias.map(c => (
        <NavLink key={c.slug} to={`/category/${c.slug}`}>
            {c.label}
        </NavLink>
        ))}
    </nav>

    <CartWidget count={0} />
    </header>
    );
}