import Home from "./pages/Home/home";
import NossosSeguros from "../../nossos-seguros/src/App";
import ContratarSeguro from "../../contratar-seguro/src/App";

const App = () => {
    return (
        <main>
            <Home />
            <NossosSeguros />
            <ContratarSeguro />
        </main>
    );
};

export default App;
