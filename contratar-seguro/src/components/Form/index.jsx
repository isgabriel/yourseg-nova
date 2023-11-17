import Button from "../Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import "./style.css";

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success(
            "Seus dados foram enviados com sucesso. Aguarde o nosso contato para realizar um orçamento personalizado!"
        );

        setTimeout(() => {
            window.location.href = "/aplicacao-yourseg";
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
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        placeholder="Digite seu email..."
                        required
                    />
                </div>
                <div className="div-input">
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        id="cpf"
                        placeholder="Digite seu CPF..."
                        required
                    />
                </div>
                <div className="div-input">
                    <label htmlFor="telefone">Telefone</label>
                    <input
                        type="text"
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
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
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
