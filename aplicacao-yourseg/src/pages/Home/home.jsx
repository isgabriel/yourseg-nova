import "./style.css";

const Home = () => {
    return (
        <main className="main-home-container">
            <h1>
                Somos a YourSeg e <span>garantimos </span> a proteção dos seus
                bens mais preciosos!
            </h1>

            <div className="home-description">
                <p>
                    Entendemos que a vida está cheia de <span>imprevistos</span>
                    , e é por isso que estamos aqui para oferecer a você a{" "}
                    <span>tranquilidade</span> que merece.
                </p>
                <p>
                    Garantimos, em <span>todos os nossos serviços</span>,
                    <span>proteção personalizada</span> e{" "}
                    <span>atendimento excepcional</span> para garantir seu
                    conforto e segurança desde o início!
                </p>
            </div>
        </main>
    );
};

export default Home;
