var Calculadora = {
  ADICAO: '+',
  SUBTRACAO: '-',
  DIVISAO: '/',
  MULTIPLICACAO: '*',

  adicionar: function(num1, num2){
    return Calculadora.calcular(num1, num2, Calculadora.ADICAO);
  },

  subtrair: function(num1, num2){
    return Calculadora.calcular(num1, num2, Calculadora.SUBTRACAO);
  },

  dividir: function(num1, num2){
    if(num2 == 0){
      return 'Erro';
    }
    return Calculadora.calcular(num1, num2, Calculadora.DIVISAO);
  },

  multiplicar: function(num1, num2){
    return Calculadora.calcular(num1, num2, Calculadora.MULTIPLICACAO);
  },

  calcular: function(num1, num2, operacao){
    var resultado = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(isNaN(num1) || isNaN(num2)){
      return 0;
    }

    switch(operacao){
      case Calculadora.ADICAO:
        resultado = num1 + num2;
        break;
      case Calculadora.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case Calculadora.DIVISAO:
        resultado = num1 / num2;
        break;
      case Calculadora.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
        break;
    }
    return resultado;
  }
};

if ( typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Calculadora;
}

/* // Codigo antigo, antes da refatoração
var Calculadora = {
  adicionar: function(num1, num2){

    if(isNaN(num1) || isNaN(num2)){ // item 4 e 5
      return 0;
    }

    /* num1 = parseInt(num1);
    num2 = parseInt(num2); */
    /*
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    return num1 + num2;
  },

  subtrair: function(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
      return 0;
    }
    return num1 - num2;
  },

  dividir: function(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
      return 0;
    }
    if(num2 == 0){
      return 'Erro';
    }
    return num1 / num2;
  },

  multiplicar: function(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
      return 0;
    }
    return num1 * num2;
  },
};
//usado na função require do NodeJS
if ( typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = Calculadora;
}
*/