// Así se creaban normalmente.

// // Creamos un elemento para el logo
// const Logo = createElement("img", {
//     className: "logo",
//     alt: "Logo",
//     src: "./img/logo.png"
// })


// Así sería mas comodo y lo que querían hacer los señores de React
// const Logo = <img src="./img/logo.png" alt="Logo" className="logo"/>
// Super sencillo mi bro. Sin embargo, no es posible ni viable :'(


// Ellos crearon una manera mas comoda de hacerlo combinando
// HTML, JS y XML llamado JSX

const Logo = <img src="./img/logo.png" alt="Logo" className="logo"/>
// NOTA MUY IMPORTANTE: NO ES HTML, ES JSX. Además, siempre requieren la llave de apertura y cierre.
