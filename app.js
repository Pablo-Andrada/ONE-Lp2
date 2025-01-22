let numeroSecreto = generarNumeroSecreto();



const asignarTextoElemento = (elemento, texto) => {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

const verificarIntento = () => {
    let numeroDelUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    console.log(numeroDelUsuario);
    console.log(numeroDelUsuario === numeroSecreto);
    
};

function generarNumeroSecreto  ()  {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Indica un número del 1 al 100.');