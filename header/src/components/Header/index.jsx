import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
    return (
        <BrowserRouter>
            <header>
                <div>logo</div>
                <nav>
                    <Link to="/aplicacao-yourseg">Home</Link>
                    <Link to="/nossos-seguros">Quem somos</Link>
                    <Link to="/contratar-seguro">Contratar um Seguro</Link>
                </nav>
            </header>
        </BrowserRouter>
    );
};

export default Header;
