import { cards } from "./data";
import Card from "./components/Card";
import "./style.css";

const NossosSeguros = () => {
    const listOfcards = cards.map((card, index) => (
        <Card key={index} id={index} card={card} />
    ));

    return (
        <section className="main-container-1" id="nossos-seguros">
            <h1>QUEM SOMOS?</h1>
            <p>
                Somos uma empresa especializada no ramo de seguros com
                <span> mais de 20 anos no mercado</span> e temos diferentes
                planos, com diferentes benefícios. Confira:
            </p>
            <ul>{listOfcards}</ul>
        </section>
    );
};

export default NossosSeguros;
