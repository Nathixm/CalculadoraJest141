// 1- Import / Require --> Bibliotecas e Frameworks
// Ficará vazio nesse exemplo porque vamos usar o que é nativo JS

// 2- Opcional no JavaScript: Classe (grupo de funcionalidades)

// 2.1- Atributos / Campos

// 2.2- Funcionalidades (Funções e Métodos)

let somarDoisNumeros = function somarDoisNumeros(num1, num2) {
    let resultado = 0;
    resultado = num1 + num2;
    return resultado;
} 

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2) {
    return num1 - num2;
}

let multiplicarDoisNumeros = (num1, num2) => num1 * num2;
// função de flexa ou arrow function

let dividirDoisNumeros = (num1, num2) => num1 / num2; 


module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
}