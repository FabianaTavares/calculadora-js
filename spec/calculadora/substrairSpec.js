/**
 * @description Casos de Teste.
 * 1 - Testar uma subtracao.
 * 2 - Testar uma subtracao ara valores em formato texto.
 * 3 - Testar uma subtracao com valores decimais
 * 4 - testar validação do primeiro numero
 * 5 - testar validação do segundo numero.
 */

describe("Suite de testes de subtração", function (){

  var Calculadora = require('../../src/js/calculadora.js');

  it ('deve retornar 5 para os valores de 8 e 3', function(){
    expect(Calculadora.subtrair(8, 3)).toEqual(5);
  });

  it ('deve retornar 12 para os valores 9 e -3 em formato texto.', function(){
    expect(Calculadora.subtrair('9', '-3')).toEqual(12);
  });

  it ('deve retornar -3.5 para os valores de 1.5 e 5', function(){
    expect(Calculadora.subtrair(1.5, 5)).toEqual(-3.5);
  });

  it ('deve retornar 0 quando valor 1 for inválido', function(){
    expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
  });

  it ('deve retornar 0 quando valor 2 for inválido', function(){
    expect(Calculadora.subtrair(10, undefined)).toEqual(0);
  });

});