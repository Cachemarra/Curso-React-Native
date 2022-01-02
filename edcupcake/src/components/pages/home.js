// Importacion de componentes 
import Cupcakes from "./cupcakes";
import Banner from "../sections/Banner";
import Servicios from "../sections/Servicios";

const Home = () => (
<>
    <Banner/>
    <Cupcakes peticion="cupcakes?sabor_like=Vainilla"/>
    <Servicios peticion="servicios"/>
</>
)

export default Home;