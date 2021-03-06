
/*
// Normal
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenidos a mi pág!</h1>
        <a
          className="App-link"
          href="https://github.com/Cachemarra"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita mi Github!
        </a>
      </header>
    </div>
  );
}
*/

// Operador flecha
/*
const App = () => {
  <div>
    <header>
      <h1>Bienvenidos a mi pág!</h1>
      <a
        className="App-link"
        href="https://github.com/Cachemarra"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visita mi Github!
      </a>
    </header>
  </div>
};
*/

// Cupcakes

import Cupcake from './Cupcake'; // Importamos el componente Cupcake.js
import "./App.css"

const App = () => ( // Creamos los cupcakes y sus elementos. 
  // El componente lo crearemos y definiremos en Cupcake.js
  <div className="container">
    <Cupcake color="rosa" sabor="vainilla" foto="https://i.pinimg.com/600x315/b5/3c/dd/b53cdd7bebad3c60289176c831766d2d.jpg"/>
    <Cupcake color="azul" sabor="chocolate" foto="https://www.vanillacupcakery.com.au/wp-content/uploads/2018/04/IMG_2314-256x256.jpg"/>

    <Cupcake color="rosa" sabor="vainilla" foto="https://i.pinimg.com/600x315/b5/3c/dd/b53cdd7bebad3c60289176c831766d2d.jpg"/>
    <Cupcake color="azul" sabor="chocolate" foto="https://www.vanillacupcakery.com.au/wp-content/uploads/2018/04/IMG_2314-256x256.jpg"/>
    <Cupcake color="rosa" sabor="vainilla" foto="https://i.pinimg.com/600x315/b5/3c/dd/b53cdd7bebad3c60289176c831766d2d.jpg"/>
    <Cupcake color="azul" sabor="chocolate" foto="https://www.vanillacupcakery.com.au/wp-content/uploads/2018/04/IMG_2314-256x256.jpg"/>
    <Cupcake color="rosa" sabor="vainilla" foto="https://i.pinimg.com/600x315/b5/3c/dd/b53cdd7bebad3c60289176c831766d2d.jpg"/>
    <Cupcake color="azul" sabor="chocolate" foto="https://www.vanillacupcakery.com.au/wp-content/uploads/2018/04/IMG_2314-256x256.jpg"/>
    <Cupcake color="rosa" sabor="vainilla" foto="https://i.pinimg.com/600x315/b5/3c/dd/b53cdd7bebad3c60289176c831766d2d.jpg"/>
    <Cupcake color="azul" sabor="chocolate" foto="https://www.vanillacupcakery.com.au/wp-content/uploads/2018/04/IMG_2314-256x256.jpg"/>
    <Cupcake color="morado" sabor="universo" foto="https://static.turbosquid.com/Preview/2020/02/16__08_13_24/RM.jpg7E362147-DD2F-4499-8793-604CB2957355Large.jpg"/>
    <Cupcake color="oro" sabor="chocolomo" foto="https://www.hola.com/imagenes/cocina/recetas/20190910149038/cupcakes-chocolate-caramelo/0-717-246/cupcake-caramel-t.jpg"/>

  </div>
);

export default App;
