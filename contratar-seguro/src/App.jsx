import { BrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import "./style.css";

const ContratarSeguro = () => {
    return (
        <BrowserRouter>
            <section className="main-container" id="contratar-seguro">
                <div className="text-div">
                    <h1>Contratar Seguro</h1>
                    <p>
                        Preencha o formulário abaixo e um de nossos
                        especialistas entrará em contato com você de forma
                        rápida.
                    </p>
                </div>
                <Form />
            </section>
        </BrowserRouter>
    );
};

export default ContratarSeguro;
