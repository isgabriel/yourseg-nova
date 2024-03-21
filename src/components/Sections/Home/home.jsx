import "./style.css";

const Home = () => {
    return (
        <section className="main-home-container" id="home">
            <h1>YOURSEG</h1>
            <div className="home-description">
                <p>
                    Somos uma seguradora com o propósito de{" "}
                    <span> garantir a proteção e segurança</span> dos seus bens
                    mais preciosos!
                </p>
                <p>
                    Entendemos que a vida está cheia de imprevistos, e é por
                    isso que estamos aqui para{" "}
                    <span>oferecer a tranquilidade que você merece.</span>
                </p>
                <p>
                    Garantimos, em todos os nossos serviços,{" "}
                    <span>
                        proteção personalizada e atendimento excepcional
                    </span>{" "}
                    para garantir seu conforto e segurança desde o início!
                </p>
            </div>
            <img
                src="https://github.com/isgabriel/yourseg-nova/blob/main/aplicacao-yourseg/src/assets/familia-1.png?raw=true"
                alt="familia"
                className="family"
            />

            <img
                src="https://raw.githubusercontent.com/isgabriel/yourseg-nova/2ca11b2437e51eb5ec105a5b6c66b877f0c1bc53/aplicacao-yourseg/src/assets/vetor-white.svg"
                className="vetor-curve"
            />
        </section>
    );
};

export default Home;
