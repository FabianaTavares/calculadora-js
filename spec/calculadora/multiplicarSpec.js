/**
 * @description Casos de Teste.
 * 1 - Testar uma multiplicacao.
 * 2 - Testar uma multiplicacao para valores em formato texto.
 * 3 - Testar uma multiplicacao com valores decimais.
 * 4 - testar validação do primeiro numero.
 * 5 - testar validação do segundo numero.
 */

describe("Suite de testes de multiplicacao", function (){

  var Calculadora = require('../../src/js/calculadora.js');

  it ('deve retornar 6 para os valores de 2 e 3', function(){
    expect(Calculadora.multiplicar(2, 3)).toEqual(6);
  });

  it ('deve retornar 9 para os valores 3 e 3 em formato texto.', function(){
    expect(Calculadora.multiplicar('3', '3')).toEqual(9);
  });

  it ('deve retornar 4.5 para os valores de 1.5 e 3', function(){
    expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
  });

  it ('deve retornar 0 quando valor 1 for inválido', function(){
    expect(Calculadora.multiplicar(undefined, 10)).toEqual(0);
  });

  it ('deve retornar 0 quando valor 2 for inválido', function(){
    expect(Calculadora.multiplicar(10, undefined)).toEqual(0);
  });

});