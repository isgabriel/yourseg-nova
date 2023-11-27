import { useState } from "react";
import "./style.css";
import Menu from "../Menu";

const Header = () => {
    const [menu, setMenu] = useState(false);

    const menuBtn =
        "https://raw.githubusercontent.com/isgabriel/yourseg-nova/903175a919b75aa6d7caf83d2ad7a26fe859c0dc/header/src/assets/menu-hamburguer%201.svg";
    const closeBtn =
        "https://raw.githubusercontent.com/isgabriel/yourseg-nova/bacd32490223dc9cd502562879465c4c23e2bd1c/header/src/assets/close-button.svg";

    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <header className="header">
            <button
                className={menu ? "close-menu-btn" : "open-menu-btn"}
                onClick={handleMenu}
            >
                <img src={menu ? closeBtn : menuBtn} alt="menu hamburguer" />
            </button>
            <figure className="logo-header">
                <img
                    src="https://raw.githubusercontent.com/isgabriel/yourseg-nova/903175a919b75aa6d7caf83d2ad7a26fe859c0dc/header/src/assets/logo-header.svg"
                    alt="logo header"
                />
            </figure>
            <Menu menu={menu} setMenu={setMenu} />
        </header>
    );
};

export default Header;
