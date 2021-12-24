// Importamos la libreria que hicimos
import { createElement, render } from "./libreria.js"


// Creamos un elemento para el logo
const Logo = createElement("img", {
    className: "logo",
    alt: "Logo",
    src: "./img/logo.png"
})

// Creamos un elemento para el Nav
const Nav = createElement("nav", {
    className: "main-nav"
})

// Creamos un header con los siguientes elementos
const Header = createElement("header", { // Elemento Header
    className: "main-header" // su ClassName es "main-header"
    }, [Logo, Nav]) // Contendrá los elementos Logo y Nav. Son sus hijos.


// Lo instertamos en el DOM
render(Header, document.getElementById("root"))
