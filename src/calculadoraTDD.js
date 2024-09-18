
let somarDoisNumeros = function somarDoisNumeros(num1, num2) {
    return num1 + num2;
} 

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2) {
    return num1 - num2;
}

let multiplicarDoisNumeros = (num1, num2) => num1 * num2; // função de flexa ou arrow function

let dividirDoisNumeros = (num1, num2) => num1 / num2; 

module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
}

//TDD 
//Teste Driven Development
//Desenvolvimento Direcionado por Testes
//Teste código que testa outro código
// --> Teste Primeiro / eXtreme Programming (XP)
// Realizar o teste de unidade primeiro, pois consigo enxergar melhor o progresso

// Criar todos os testes de unidades primeiro antes de programar o esqueleto:
/*ex:

let somarDoisNumeros = function somarDoisNumeros(num1, num2) {
    return 0;
} */