const entrada1 = prompt("Informe o primeiro número da operação")
const entrada2 = prompt("Informe o segundo número da operação")
let operacao = prompt("As operações disponíveis são: Soma, Diferença, Multiplicação ou Divisão. Escolha uma destas operações. ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)


if (operacao == "Soma") {
    var resultado = x + y
}
if (operacao == "Diferença") {
    var resultado = x - y
}
if (operacao == "Multiplicação") {
    var resultado = x*y
}
if (operacao == "Divisão") {
    var resultado = x/y
}1
alert(
    "Resultado da Operação:\n" + resultado
)