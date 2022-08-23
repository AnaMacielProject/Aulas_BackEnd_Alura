const texto1 = 'Olá Mundo!';
const texto2 = "olá mundo";

console.log(texto1);
console.log(texto2);

const citacao = 'A Ana disse "Oi"';

console.log(citacao);

const citacaoTrocaAspas = "O bruno disse 'cita diferente'";

console.log(citacaoTrocaAspas);

// template string ou template literal


// concatenacao
console.log( texto1 + "  " + citacao);

//testar a transformação/conversão do código Unicode
/* Os caracteres \u no início do código são caracteres de
 escape que usamos para sinalizar ao JavaScript de que 
 estamos falando de códigos Unicode, e não de strings de 
 texto usuais.*/

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//para padronizar uma comparação entre strings:
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

//Uma das formas de tratar isso é padronizando todos os 
//inputs 

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// para saber o tamanho da string 
const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres
