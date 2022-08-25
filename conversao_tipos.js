// conversao implicita
// permite que converta um dado em outro
const numero = 4.5;
const numString = "4.5";

console.log( numero === numString); // retorna false
console.log( numero == numString); // retorna true  comparacao implicita
console.log( numero + numString); // concatena

// conversao explicita
// funcao number() e string()
console.log( Number(numString)+ numero); // coverte o valor string para numero
console.log( String(numero)+numString ); // concatena



