const { test, expect } = require('@jest/globals')

const calculadora = require('../src/calculadora')

// DDT
// Data Driven Testing
// Teste Direcionado por Dados (Teste com Massa)
// Massa de teste é uma massa de dados com entrada e saída

let massaDivisao = [
    [7, 2, 3.5],
    [7, 0, Infinity], //tupla
    [4, 0.25, 16]
]

test.each(massaDivisao)('dividir %f / %f', (num1, num2, resultadoEsperado) => {
    //Configura / Teste each testa 1 de cada vez / Vem da lista  acima (massaDivisão)


    const resultadoObtido = calculadora.dividirDoisNumeros(num1, num2);  //Executa

    expect(resultadoObtido).toBe(resultadoEsperado);
    if (resultadoObtido == Infinity) {
        console.log('Não é possível dividir por zero');  //Valida
    }
})
