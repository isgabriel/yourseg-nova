import { BrowserRouter, Link } from "react-router-dom";

import "./style.css";

const Header = () => {
    return (
        <BrowserRouter>
            <header className="header">
                <p>
                    Your<span>Seg</span>
                </p>
                <nav className="navbar">
                    <span onClick={}>Home</span>
                    <span onClick={}>Quem Somos</span>
                    <span onClick={}>Contratar um Seguro</span>
                    {/* <Link to="#home">Home</Link>
                    <Link to="#nossos-seguros">Quem somos</Link>
                    <Link to="#contratar-seguro">Contratar um Seguro</Link> */}
                </nav>
            </header>
        </BrowserRouter>
    );
};

export default Header;
