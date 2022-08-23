//tipos number

const meuNumero = 3;
const numPrimeiro = 1;
const numSegundo = 2;

const operacaoMatematica = numPrimeiro * numSegundo;


console.log(operacaoMatematica)

//ponto flutuante

const numeroPontoFlutuante = 3.3;
const numeroSemZeroPontoFlutuante = .5;

const mostraOperacaoPontoFlutuante = numPrimeiro / numeroPontoFlutuante;
console.log(mostraOperacaoPontoFlutuante)

var a = 10
var b = 0
console.log(a/b); // Infinity - divisao por zero

var a = 0
var b = 0
console.log(a/b); // NaN divisao de zero por zero

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    return salarioHora;
  }
  console.log(ganhoPorHora(3000,176));

  // agora arredondano o valor pode usar Math.aroud

  function ganhoPorHoraArredondado(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    return Math.round(salarioHora);
  
  }
  console.log(ganhoPorHoraArredondado(3000,176));

  // usando o metodo toFixed para controlar o numero de casas decimais
  function ganhoPorHoraFixaCasaDecimal(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const total = salarioHora.toFixed(2);
  
    return total;
  
  };

  console.log(ganhoPorHoraFixaCasaDecimal(3000,176));

  // agora usando a moeda com o medtodo toLocaleString
  function ganhoPorHoraComMoeda(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return formatado;
  
  }

  console.log (ganhoPorHoraComMoeda(3000,176));

// ordenacao de numeros 
var lista = [10,1, 5, 9, 8, 12, 15];

// queremos ordena-los. o que fazer ?
console.log(lista.sort());

// sort recebe opcionalmente uma função de comparação que, dados dois valores, deve devolver um número inteiro:

////Se for 0 indica que são iguais
//Se for -1 indica que o primeiro valor é menor
//Se for 1, o segundo é menor.
function comparaNumeros(a,b){
    if (a==b) {
        return 0;
    }

    if ( a < b){
        return -1;
    }

    if (a > b){
        return 1;
    }
}

console.log(lista.sort(comparaNumeros));


  //No JavaScript temos outros métodos que podem ser utilizadas para o arredondamento como:

  //Math.ceil() que retorna o maior número inteiro que é maior que o número passado, por exempl////o Math.ceil(11.123), o valor fica 12

  //Math.floor() que retorna o menor número inteiro que é menor que o número passado, por exemplo Math.floor(11.789), o valor fica 11