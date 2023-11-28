import { BrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import "./style.css";
import Footer from "./components/Footer";

const ContratarSeguro = () => {
    return (
        <BrowserRouter>
            <section className="main-container">
                <img
                    src="https://raw.githubusercontent.com/isgabriel/yourseg-nova/dbc8fd3089df922e4e1e2fc170c07916a36ea9d0/nossos-seguros/src/assets/vetor-v.svg"
                    alt="vetor down"
                    className="vetor-down"
                />
                <div className="text-div">
                    <h1 id="contratar-seguro">Contratar Seguro</h1>
                    <p>
                        Preencha o formulário abaixo com seus dados para
                        solicitar o orçamento do seu seguro e aguarde que um de
                        nossos especialistas entrará em contato com você o mais
                        rápido possível!
                    </p>
                </div>
                <Form />
            </section>
            <Footer />
        </BrowserRouter>
    );
};

export default ContratarSeguro;
