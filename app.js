let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

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
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}.`);
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
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros posibles
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    } else {       
        //Si el numero generado esta incluido en la lista hacemos una operacion,sino otra...
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();