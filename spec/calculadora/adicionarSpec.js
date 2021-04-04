/**
 * @description Casos de Teste.
 * 1 - Testar uma soma.
 * 2 - Testar uma soma ara valores em formato texto.
 * 3 - Testar uma soma com valores decimais
 * 4 - testar validação do primeiro numero
 * 5 - testar validação do segundo numero.
 */

describe("Suite de testes de adição", function (){

  var Calculadora = require('../../src/js/calculadora.js');

  it ('deve retornar 5 para os valores de 2 e 3', function(){
    expect(Calculadora.adicionar(2,3)).toEqual(5);
  });

  it ('deve retornar 6 para os valores 9 e -3 em formato texto.', function(){
    expect(Calculadora.adicionar('9', '-3')).toEqual(6);
  });

  it ('deve retornar 4.5 para os valores de 1.5 e 3', function(){
    expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
  });

  it ('deve retornar 0 quando valor 1 não for numerico', function(){
    expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
  });

  it ('deve retornar 0 quando valor 2 não for numerico', function(){
    expect(Calculadora.adicionar(10, undefined)).toEqual(0);
  });

});