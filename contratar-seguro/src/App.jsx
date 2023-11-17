import Form from "./components/Form";
import "./style.css";

const App = () => {
    return (
        <main className="main-container">
            <div>
                <h1>Contratar Seguro</h1>
                <p>
                    Preencha o formulário abaixo e um de nossos especialistas
                    entrará em contato com você de forma rápida.
                </p>
            </div>
            <Form />
        </main>
    );
};

export default App;
