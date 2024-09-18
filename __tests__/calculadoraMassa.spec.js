const { test, expect } = require('@jest/globals')

// Bibliotecas e referencias
//Referencia ao codigo da calculadora
const calculadora = require('../src/calculadora')

//Referencia a massa de teste
const massa = require('../../fixtures/massa')

    //Somar
test.each(massa.array.map(bloco => [
    bloco.num1, 
    bloco.num2,
    bloco.esperadoSoma]))
    ('somar %f + %f com massa', (num1, num2, resultadoEsperado) => {
       //executa
       const resultadoObtido = calculadora. somarDoisNumeros(num1, num2);
       
       //valida
       expect(resultadoObtido).toBe(resultadoEsperado);
    })

    //Subtrair
test.each(massa.array.map(bloco => [
    bloco.num1, 
    bloco.num2,
    bloco.esperadoSubtracao]))
    ('subtrair %f - %f com massa', (num1, num2, resultadoEsperado) => {
       //executa
       const resultadoObtido = calculadora.subtrairDoisNumeros(num1, num2);
       
       //valida
       expect(resultadoObtido).toBe(resultadoEsperado);
    })

    //Multiplicar
test.each(massa.array.map(bloco => [
    bloco.num1, 
    bloco.num2,
    bloco.esperadoMultiplicacao]))
    ('subtrair %f * %f com massa', (num1, num2, resultadoEsperado) => {
       //executa
       const resultadoObtido = calculadora.multiplicarDoisNumeros(num1, num2);
       
       //valida
       expect(resultadoObtido).toBe(resultadoEsperado);
    })

     //Dividir
test.each(massa.array.map(bloco => [
    bloco.num1, 
    bloco.num2,
    bloco.esperadoDivisao]))
    ('subtrair %f / %f com massa', (num1, num2, resultadoEsperado) => {
       //executa
       const resultadoObtido = calculadora.dividirDoisNumeros(num1, num2);
       
       //valida
       expect(resultadoObtido).toBe(resultadoEsperado);
    })