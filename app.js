let numeroSecreto = generarNumeroSecreto();

let intentos = 1;

const asignarTextoElemento = (elemento, texto) => {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

const verificarIntento = () => {
    let numeroDelUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDelUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1 ? 'vez' : 'veces')}!`)
    } else {
        if (numeroDelUsuario > numeroSecreto) {
        asignarTextoElemento('p','El número secreto es menor!')            
        } else {
        asignarTextoElemento('p','El número secreto es mayor!')            
        }
        intentos++;
    };
    
};

function generarNumeroSecreto  ()  {
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Indica un número del 1 al 10.');