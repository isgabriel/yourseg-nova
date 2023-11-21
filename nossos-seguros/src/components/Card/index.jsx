import "./style.css";

const Card = ({ index, card }) => {
    const handleClick = () => {
        window.location.replace("/contratar-seguro");
    };
    return (
        <li id={index} className="item" onClick={handleClick}>
            <img src={card.img} alt="" />
            <h3>{card.name}</h3>
            <p>{card.description}</p>
            <p className="price">
                <span id="rs">R$</span>
                <span id="price">{card.initialValue}</span>{" "}
                <span id="month">/mês</span>
            </p>
        </li>
    );
};

export default Card;
