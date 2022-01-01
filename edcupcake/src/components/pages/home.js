// Importacion de componentes 
import Cupcakes from "./cupcakes";
import Banner from "../sections/Banner";

const Home = () => (
<>
    <Banner/>
    <Cupcakes peticion="cupcakes?sabor_like=Vainilla"/>
</>
)

export default Home;