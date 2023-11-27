import { BrowserRouter, Link } from "react-router-dom";

import "./style.css";

const Header = () => {
    const scrollHome = () => {
        const element = document.getElementById("home");

        element.scrollIntoView({ behavior: "smooth" });
    };
    const scrollNossosSeguros = () => {
        const element = document.getElementById("nossos-seguros");

        element.scrollIntoView({ behavior: "smooth" });
    };
    const scrollContratar = () => {
        const element = document.getElementById("contratar-seguro");

        element.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <BrowserRouter>
            <header className="header">
                <p>
                    Your<span>Seg</span>
                </p>
                <nav className="navbar">
                    <span onClick={scrollHome}>Home</span>
                    <span onClick={scrollNossosSeguros}>Quem Somos</span>
                    <span onClick={scrollContratar}>Contratar um Seguro</span>
                    {/* <Link to="#home">Home</Link>
                    <Link to="#nossos-seguros">Quem somos</Link>
                    <Link to="#contratar-seguro">Contratar um Seguro</Link> */}
                </nav>
            </header>
        </BrowserRouter>
    );
};

export default Header;
