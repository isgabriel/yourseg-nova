import { cards } from "./data";
import Card from "./components/Card";
import "./style.css";

const App = () => {
    const listOfcards = cards.map((card, index) => (
        <Card key={index} id={index} card={card} />
    ));

    return (
        <main className="main-container">
            <h1 className="title-page">QUEM SOMOS?</h1>
            <ul>{listOfcards}</ul>
        </main>
    );
};

export default App;
