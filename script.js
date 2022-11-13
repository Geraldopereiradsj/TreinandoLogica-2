// Treinando Lógica, Exercício alerta se o funcionário conseguiu ou não o empréstimo para o banco

let salarioA = parseFloat(prompt('Digite aqui seu salário'));
let prestacaoB = parseFloat(prompt('Digite o valor da prestação'));

if (prestacaoB > (30 * salarioA) / 100) {
    alert('Empréstimo não concedido')
} else {
    alert('Empréstimo concedido')
}