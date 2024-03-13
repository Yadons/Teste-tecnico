// Questão 1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {

    K = K + 1;
    //console.log(K)
    SOMA = SOMA + K;
    //console.log(SOMA)
}

console.log(SOMA); // SOMA == 91.
// Ao final do processamento a soma passa a ser 91, pois além da variável K está se repetindo, o cálculo da soma tbm está sendo realizado dentro da estrutura de repetição. Sendo assim, vai somando com o último valor da variável de controle.