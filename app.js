let numeroSecreto = 0;

let intentos = 0;

const asignarTextoElemento = (elemento, texto) => {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

const verificarIntento = () => {
    let numeroDelUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDelUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}!`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { // Acá ingresa cuando NO acerto
        if (numeroDelUsuario > numeroSecreto) {
        asignarTextoElemento('p','El número secreto es menor!')            
        } else {
        asignarTextoElemento('p','El número secreto es mayor!')            
        }
        intentos++;
        LimpiarCaja();
    };    
};
const condicionesIniciales = () => {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p', 'Indica un número del 1 al 10.');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;    
}

const reiniciarJuego = () => {
    //limpiar caja
    LimpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Reinicializar el contador de número de intervalos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

const LimpiarCaja = () => {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto  ()  {
    return Math.floor(Math.random() * 10) + 1;
}

condicionesIniciales();