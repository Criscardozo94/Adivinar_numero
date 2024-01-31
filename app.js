const readlineSync = require('readline-sync');
const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const numeroIngresado = () =>{
    return readlineSync.question('Inigrese un numero: ');
};

const juegoAdivinanza = () =>{
    const numeroSecreto = generarNumeroAleatorio();
    let numero = 0;

    console.log('BIENVENIDO AL ADIVINA-ADIVINADOR!');
    console.log('Por favor, ingrese un numero entre el 1 y el 100.\n');

    while(numero !== numeroSecreto){
        numero = numeroIngresado();
        verificarAdivinanza(numeroSecreto, numero);
    }
};

juegoAdivinanza ();