// 1- Referências / Bibliotecas
const { test, expect } = require('@jest/globals')

const calculadora = require('../src/calculadora')

// AAA = 3A 
// Arrange, Act , Assert
// Configura, Executa, Valida
test('somar 2 + 3', () => {


    // Arrange - Dados de Entrada e Saida (Resultado Esperado)
    const num1 = 2;
    // console.log(`num1 = ${num1}`) - escrever no terminal
    const num2 = 3;
    const resultadoEsperado = 5;

    //Act
    const resultadoObtido = calculadora.somarDoisNumeros(num1, num2);

    //Assert
    expect(resultadoObtido).toBe(resultadoEsperado);

})

test('Subtrair 1 - 2', () => {
    const num1 = 1;
    const num2 = 2;
    const resultadoEsperado = -1;

    const resultadoObtido = calculadora.subtrairDoisNumeros(num1, num2);

    expect(resultadoObtido).toBe(resultadoEsperado);
})

test('Multiplicar 2 * 8', () => {
    const num1 = 2;
    const num2 = 8;
    const resultadoEsperado = 16;

    const resultadoObtido = calculadora.multiplicarDoisNumeros(num1, num2);

    expect(resultadoObtido).toBe(resultadoEsperado);

})

test('Dividir 7 / 2', () => {
    //Confirgura
    const num1 = 7;
    const num2 = 2;
    const resultadoEsperado = 3.5;

    //Executa
    const resultadoObtido = calculadora.dividirDoisNumeros(num1, num2);

    //Valida
    expect(resultadoObtido).toBe(resultadoEsperado);

})

test('Dividir 7 / 0', () => {
    //Confirgura
    const num1 = 7;
    const num2 = 0;
    const resultadoEsperado = Infinity; // Não é uma palavra 'Infinity é um número'

    //Executa
    const resultadoObtido = calculadora.dividirDoisNumeros(num1, num2);

    //Valida
    expect(resultadoObtido).toBe(resultadoEsperado);
    if (resultadoObtido == Infinity) {
        console.log('Não é possível dividir por zero');
        //O expect é o teste 
    }

})


