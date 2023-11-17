import Button from "../Button";
import "./style.css";

const Form = () => {
    return (
        <form className="form">
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
                <input type="text" placeholder="Digite seu email..." required />
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
                <label htmlFor="tipo"></label>
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
    );
};

export default Form;
