import "./style.css";

const Card = ({ index, card }) => {
    return (
        <li id={index} className="item">
            <img src={card.img} alt="" />
            <h3>{card.name}</h3>
            <p>{card.description}</p>
            <p>
                A partir de <span>{card.initialValue}</span>/mês
            </p>
        </li>
    );
};

export default Card;
