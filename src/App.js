import Corpo from "./Componentes/Corpo";
import FundoMobile from "./Componentes/FundoMobile";
import Navibar from "./Componentes/Navibar";


export default function App(){
    return(
        <div>
            <Navibar/>
            <Corpo/>
            <FundoMobile/>
        </div>
    );
}