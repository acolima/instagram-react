import Corpo from "./Components/Corpo";
import FundoMobile from "./Components/FundoMobile";
import Navibar from "./Components/Navibar";


export default function App(){
    return(
        <div>
            <Navibar/>
            <Corpo/>
            <FundoMobile/>
        </div>
    );
}