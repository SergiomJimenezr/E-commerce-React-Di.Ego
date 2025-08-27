export default function ItemListContainer({ greeting }) {
    return (
    <main>
        <section>
            <h2>{greeting}</h2>
            <div id="catalogo" className="grid"></div>
        </section>
        </main>
    );
}