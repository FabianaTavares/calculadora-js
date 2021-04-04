/**
 * @description Casos de Teste.
 * 1 - Testar uma divisao.
 * 2 - Testar uma divisao para valores em formato texto.
 * 3 - Testar uma divisao com valores decimais.
 * 4 - Testar divisão por zero.
 * 5 - testar validação do primeiro numero.
 * 6 - testar validação do segundo numero.
 */

describe("Suite de testes de divisao", function (){

  var Calculadora = require('../../src/js/calculadora.js');

  it ('deve retornar 6 para os valores de 12 e 2', function(){
    expect(Calculadora.dividir(12, 2)).toEqual(6);
  });

  it ('deve retornar 4 para os valores 12 e 3 em formato texto.', function(){
    expect(Calculadora.dividir('12', '3')).toEqual(4);
  });

  it ('deve retornar 1.5 para os valores de 4.5 e 3', function(){
    expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
  });

   it ('deve retornar erro ao dividir por zero', function(){
    expect(Calculadora.dividir(10, 0)).toEqual('Erro');
    expect(Calculadora.dividir(10, '0')).toEqual('Erro');
  });

  it ('deve retornar 0 quando valor 1 for inválido', function(){
    expect(Calculadora.dividir(undefined, 10)).toEqual(0);
  });

  it ('deve retornar 0 quando valor 2 for inválido', function(){
    expect(Calculadora.dividir(10, undefined)).toEqual(0);
  });

});