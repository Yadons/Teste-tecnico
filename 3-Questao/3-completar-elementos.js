// Testes realizados.
// Formas de trazer para código a 3 questão.
// LETRA A.
let controle = 1;
while(controle < 10) {
    console.log(controle);
    controle = controle + 2;
}
// Resposta é 9.

console.log("--------");

//LETRA B.
let control = 2;
while(control < 200) {
    console.log(control); // Próximo número é 128.
    control = control * 2;
}
// Resposta é 128.

console.log("--------");

//LETRA C.
let resultado = 0;
let impares = -1;
let resposta;

console.log(resultado);    
while(impares < 13) {
    impares = impares + 2;
        
    resposta = impares;
    resultado = resposta + resultado;
    
    console.log(resultado);
}
// Resposta é 49.

console.log("--------");

//Letra D.
let razao = 8;
let contagem = 4;
let progressao = 12;

while(contagem <= 100) {
    console.log(contagem);
    contagem = progressao + contagem;
    progressao = razao + progressao;

};
//Resposta é 100.

console.log("--------");
// LETRA E.
let numInicial = 0;
let primeiroNumero = 0;
let segundoNumero = 1;
let sequencia;

while(numInicial < 7) {
    sequencia = primeiroNumero + segundoNumero;
    primeiroNumero = segundoNumero;
    segundoNumero = sequencia;
    console.log(primeiroNumero);
    numInicial = numInicial +1;
}
// Resposta é 13.

console.log("--------");

// LETRA F.
/* Creio que a resposta correta seria 200. Porque analisando a única coisa que segue um padrão e permite  da continuidade na sequência são os nomes dos números começando com a letra D. */
const numeros = [2,10,12,16,17,18,19];
const cacaPalavras = ["Dois", "Dez", "Doze","Dezesseis", "Dezessete", "Dezoito", "Dezenove", "Duzentos"];
let auxiliar = 12;
for(let indice = 0; indice < auxiliar; indice++) {
    if(cacaPalavras[indice] === "Duzentos") {
        numeros.push(200);
        break;
    }
}

for(let indice = 0; indice < auxiliar; indice++) {
    console.log(numeros[indice]);
}
//Resposta é 200.
