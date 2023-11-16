import { BrowserRouter, Link } from "react-router-dom";

import "./style.css";

const Header = () => {
    return (
        <BrowserRouter>
            <header className="header">
                <div>logo</div>
                <nav className="navbar">
                    <Link to="/aplicacao-yourseg">Home</Link>
                    <Link to="/nossos-seguros">Quem somos</Link>
                    <Link to="/contratar-seguro">Contratar um Seguro</Link>
                </nav>
            </header>
        </BrowserRouter>
    );
};

export default Header;
