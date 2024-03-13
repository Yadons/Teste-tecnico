// Questão 2
let numFibonacci = 13;
let primeiroNumero = 0;
let segundoNumero = 1;
let validandoSequencia;
let sequenciaFibonacci;

if (numFibonacci < 2) {
    console.log(numFibonacci);
} else { // Realizandoa sequência Fibonacci.
    for (controle = 0; controle < numFibonacci; controle++) {
        console.log(primeiroNumero);
        if(primeiroNumero == numFibonacci ) {
            validandoSequencia = primeiroNumero;
        }
         sequenciaFibonacci = primeiroNumero + segundoNumero;
        primeiroNumero = segundoNumero;
        segundoNumero = sequenciaFibonacci;     
    }

    if(validandoSequencia != numFibonacci) { // Fazendo a validação.
        console.log("O número não pertence a sequência Fibonacci.");
    }  else {
        console.log("O número informado faz parte da sequência.");
    } 
    
}

