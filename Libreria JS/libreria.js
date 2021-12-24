// Función para crear un elemento de mejor manera
// Attr en caso de no llegar se define como objeto vacio
export function createElement(type, attrList = {}, children = []) {
    // Creamos un nuevo documento
    let element = document.createElement(type)

    let keys = Object.keys(attrList)
    keys.map(k => element.setAttribute(k, attrList[k]))

    children.map(child => renderChild(element, child))    
    return element
}


// No la ponemos como export porque será usada unicamente dentro de esta libreria.
function renderChild(element, child){
    // Si es string se añade directamente. Si no, significa que es un elemento del DOM
    if(typeof child === "string"){
        element.innerHTML += child
        return
    }
    element.appendChild(child)
}


// Lo que hará será tomar el elemento del DOM y le agregamos un hijo que será el elemento que se le pase como parámetro
export function render(elem, DOMelement) {
    DOMelement.appendChild(elem)
}

