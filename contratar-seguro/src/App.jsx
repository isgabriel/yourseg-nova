import { BrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import "./style.css";

const ContratarSeguro = () => {
    return (
        <BrowserRouter>
            <section className="main-container" id="contratar-seguro">
                <img
                    src="https://raw.githubusercontent.com/isgabriel/yourseg-nova/dbc8fd3089df922e4e1e2fc170c07916a36ea9d0/nossos-seguros/src/assets/vetor-v.svg"
                    alt="vetor down"
                    className="vetor-down"
                />
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
