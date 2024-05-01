// variáveis
let vitorias = 120;
let derrotas = 20;
let nivel = "Undefined"
//função que calcula o saldo do player
function calculadora(vitorias, derrotas){
    let saldo = (vitorias - derrotas);
    return saldo
}
//chamar a função saldo
let saldo = calculadora(vitorias,derrotas);
//consultar nivel com base no saldo
if (saldo < 10){
    nivel = "Ferro";
} else if (saldo >10 && saldo <=20){
    nivel = "Bronze";
} else if (saldo >20 && saldo <=50){
    nivel = "Prata";
} else if (saldo >50 && saldo <=80){
    nivel = "Ouro";
} else if (saldo >80 && saldo <=90){
    nivel = "Diamante";
} else if (saldo >90 && saldo <=100){
    nivel = "Lendário";
} else if (saldo>100){
    nivel = "Imortal";
}
console.log("O Herói tem saldo de " + saldo + " e está no nível de " + nivel);