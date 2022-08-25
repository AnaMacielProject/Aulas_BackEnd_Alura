
const nome1 = "Leo";
const idade1 = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
const pedido = `${nome1} diz: "por favor, quero beber ${idade1 >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido);


const nome = "Ana";
const idade = 2022 - 1975;
const cidadeNascimento = "Rio de Janeiro";

const apresentacao = "meu nome é " + nome + ". Tenho "+ idade + " anos. Nasci no "+ cidadeNascimento;
console.log (apresentacao);

// usando o ternario $

const newApresentacao = `Meu nome é ${nome} .Tenho ${idade} . Nasci no ${cidadeNascimento}`; 
console.log(newApresentacao);