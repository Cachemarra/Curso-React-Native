// Así se creaban normalmente.

// // Creamos un elemento para el logo
// const Logo = createElement("img", {
//     className: "logo",
//     alt: "Logo",
//     src: "./img/logo.png"
// })


// Así sería mas comodo y lo que querían hacer los señores de React
// const Logo = <img src="./img/logo.png" alt="Logo" class="logo"/>
// Super sencillo mi bro. Sin embargo, no es posible ni viable :'(


// Ellos crearon una manera mas comoda de hacerlo combinando
// HTML, JS y XML llamado JSX

// const Logo = <img src="./img/logo.png" alt="Logo" className="logo"/>
// NOTA MUY IMPORTANTE: NO ES HTML, ES JSX. Además, siempre requieren la llave de apertura y cierre.

// Ahora a hacerlo de manera mas correcta con una arrow function. Return implicito.
// const Logo = () => <img src="img/logo.png" alt="Logo" className="logo"/>


// Otra forma de hacerlo es con return explicito
const Logo = () => {
    return (
        <div id="main-logo"> // De esta manera podemos  añadir mas cosas como este div.
            <img src="img/logo.png" alt="Logo" className="logo"/>
        </div>
    )
}

// Guardamos un elemento JSX a una variable saludo. 
// Nota, por mas que separemos elementos dentro de parentesis como si fueran tupla, no será posible.
// Regla JSX 1: Solo se puede renderizar o almacenar 1 elemento.
/*  Ejemplo de lo que no se puede!
const saludo = (
    <h1> Hola! </h1>
    <img src="img/logo.png" alt="Logo" className="logo"/>
    )
*/

// Sin embargo, podemos hacer trampa metiendo todo dentro de un elemento div ya que estamos guardando
// al elemento div y este tiene como hijos a los demás componentes.

// Regla JSX 2: Usar Fragmentos. Es decir, podemos renderizar dos elementos sin añadir elementos padres usando unicamente <> elementos </>.
// De esta forma te evitas añadir un div que puede ser innecesario

const saludo = (
    <>
        <h1>Hola!</h1>
        <img src="img/logo.png" alt="Logo" className="logo"/>
    </>
)


// Regla JSX 3: Toda etiqueta debe cerrarse. En HTML hay etiquetas que no se cierran, pero en JSX TODAS las etiquetas deben cerrarse.
// Pero, si no va a tener hijos ni elementos dentro puedes cerrarla desde el principio: <img src="logo.svg"/>
// Esto funciona aún con elementos que requieran apertura y cierre.
const miClase = "container"
const MiLogo = <img src="logo.svg" alt="Logo Principal"></img>
const divVacio = <div className={miClase} id="main"/>


// Regla JSX 4: Todo atributo compuesto se convierte en camelCase.

const miBoton = <button id="button1" onClick={}>Click on me, Senpai.</button>






