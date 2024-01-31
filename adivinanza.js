const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numeroSecreto, numeroElecto) => {
    if(numeroSecreto == numeroElecto){
        console.log('Felicitaciones! El número secreto era el: ${numeroSecreto}');
    }
    else if(numeroSecreto > numeroElecto){
        console.log('El numero secreto es mas grande. Volvé a intentar');
    }
    else{
        console.log('El numero secreto es mas chico. Dale de nuevo!');
    }
};

module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};