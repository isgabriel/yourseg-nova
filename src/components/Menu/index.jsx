import "./style.css";

const Menu = ({ menu, setMenu }) => {
    const scrollHome = () => {
        const element = document.getElementById("home");

        element.scrollIntoView({ behavior: "smooth" });
        setMenu(false);
    };
    const scrollNossosSeguros = () => {
        const element = document.getElementById("nossos-seguros");

        element.scrollIntoView({ behavior: "smooth" });
        setMenu(false);
    };
    const scrollContratar = () => {
        const element = document.getElementById("contratar-seguro");

        element.scrollIntoView({ behavior: "smooth" });
        setMenu(false);
    };

    return (
        <section className={menu ? "menu-open" : "menu-closed"}>
            {menu ? (
                <nav className="navMobile">
                    <span onClick={scrollHome}>Home</span>
                    <span onClick={scrollNossosSeguros}>Quem Somos</span>
                    <span onClick={scrollContratar}>Contratar</span>

                    <img
                        src="https://raw.githubusercontent.com/isgabriel/yourseg-nova/e21b18ce85b127a0a44175cb35acd89f66118a2c/header/src/assets/logo-menu.svg"
                        alt="logo-menu"
                        className="logo-menu"
                        onClick={scrollHome}
                    />
                </nav>
            ) : (
                <nav className="navDesktop">
                    <span onClick={scrollHome}>Home</span>
                    <span onClick={scrollNossosSeguros}>Quem Somos</span>
                    <span onClick={scrollContratar}>Contratar</span>
                </nav>
            )}
        </section>
    );
};

export default Menu;
