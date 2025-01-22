let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
const asignarTextoElemento = (elemento, texto) => {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

const intentoDeUsuario = () => {
    alert('Click desde el botón')
};

function generarNumeroSecreto  ()  {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Indica un número del 1 al 100.');