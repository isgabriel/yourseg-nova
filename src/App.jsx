import Header from "./components/Header";
import ContratarSeguro from "./components/Sections/ContratarSeguro/index";
import Home from "./components/Sections/Home/home";
import NossosSeguros from "./components/Sections/NossosSeguros/index";

function App() {
    return (
        <>
            <Header />
            <Home />
            <NossosSeguros />
            <ContratarSeguro />
        </>
    );
}

export default App;
