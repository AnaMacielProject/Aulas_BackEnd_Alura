

function imprimiTexto(texto){

    console.log(texto);
}

imprimiTexto("oi");

function soma(){
    return  2 + 8;
}

console.log (soma());

imprimiTexto(soma());

// exemplos de funcoes
console.log (Math.round(4.3)); //retorna 4
console.log (Math.round(3.85)); //retorna 4
console.log (Math.round(2.5)); //retorna 3, quando o número termina com 0.5 a função arredonda para cima

// soma dois numeros
function soma2Numeros( numero1, numero2){
    return numero1 + numero2;
}

console.log (soma2Numeros(245, 300));

function nomeIdade (nome, idade) {

    return `meu nome é ${nome} . Minha idaede é ${idade}`
}

console.log (nomeIdade("Ana", 41));

function multiplica(num1, num2){
    return num1 * num2;
}

console.log( multiplica( soma2Numeros(2,3), soma2Numeros(7,8)));


//exprassao de Funcao
const somaNum = function(num1, num2) { return num1 + num2}

console.log (somaNum ( 9,8));