const numero = parseFloat(prompt("Informe o número que você deseja calcular a tabuada."))
let resultado = ""

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero + " x " + fator + " = " + (numero * fator) + "\n"
    }
    
alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado)