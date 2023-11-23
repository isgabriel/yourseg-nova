import Button from "../Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useNavigate } from "react-router-dom";

import "./style.css";

const Form = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success(
            "Seus dados foram enviados com sucesso. Aguarde o nosso contato para realizar um orçamento personalizado!"
        );

        setTimeout(() => {
            navigate("/");
        }, 5000);
    };
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div className="div-input">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Digite seu nome..."
                        required
                    />
                </div>
                <div className="div-input">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Digite seu email..."
                        required
                    />
                </div>
                <div className="div-input">
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="number"
                        id="cpf"
                        placeholder="Digite seu CPF..."
                        required
                    />
                </div>
                <div className="div-input">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="number"
                        id="telefone"
                        placeholder="Digite seu telefone..."
                        required
                    />
                </div>
                <div className="div-input">
                    <label htmlFor="tipo">Tipo de Seguro</label>
                    <select id="tipo" required>
                        <option value="" selected disabled>
                            Selecionar o tipo de seguro...
                        </option>
                        <option value="1">Seguro Residencial</option>
                        <option value="2">Seguro Automotivo</option>
                        <option value="3">Seguro de Saúde</option>
                        <option value="4">Seguro de Viagem</option>
                        <option value="5">Seguro Empresarial</option>
                        <option value="6">Seguro Aluguel</option>
                    </select>
                </div>
                <Button />
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Form;
