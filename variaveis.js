var altura = 5 ;
var comprimento = 7;

//boolean
const usuarioLogado  = true;
const contaPaga = false;

// truthy e falsy
// 0 = false
//1 = true

console.log( 0 == false); // resultado true
console.log (""== false); // resultado true
console.log (1 ==true); // resultado true

//null representa vazio / nada
let valor ; // quando náo definimos valor o js assume que ela é undefined - indefinida
let valorNull = null // aqui é nulo mesmo

console.log( valor);
console.log (valorNull);

let numero = 3;
let texto = "alura";

console.log(typeof(numero));
console.log(typeof(texto));
console.log(typeof(valor)); // retorno undefined
console.log(typeof(valorNull)); // retorna objeto


 console.log (area = altura * comprimento);
 // nao declaramos a variavel area . funciona

 let alturaLet = 5;
 let comprimentoLet = 8 ;
 let forma = "retangulo";
 let area2;


 if ( forma == "Retangulo") {
    console.log(area2 = alturaLet * comprimentoLet);

 } else {
    area2 = (alturaLet * comprimentoLet) / 2;
    console.log(area2);
 }

 
 

 