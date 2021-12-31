// imports
import "../styles/styles.scss";

import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcakes from "./pages/cupcakes";
import AboutUs from "./pages/aboutUs";

// react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// Arrow function de la app
const App = () => (
  <Router> 
    <Header/>

    <Routes> 
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/cupcakes" element={ <Cupcakes peticion="cupcakes"/> }> </Route>
      <Route path="/nosotros" element={ <AboutUs /> }> </Route>
    </Routes>
  </Router>
)



export default App;