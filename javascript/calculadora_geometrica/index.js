function calcularAreaTriangulo() {
    const base = parseFloat(prompt("Informe numericamente a base do triângulo:"))
    const altura = parseFloat(prompt("Informe numericamente a altura do triângulo:"))
    return base * altura / 2
}

function calcularAreaRetangulo() {
    const base = parseFloat(prompt("Informe numericamente a base do retângulo:"))
    const altura = parseFloat(prompt("Informe numericamente a altura do retângulo:"))
    return base * altura
}

function calcularAreaQuadrado() {
    const lado = parseFloat(prompt("Informe numericamente a área do quadrado:"))
    return lado * lado
}

function calcularAreaTrapezio() {
    const baseMenor = parseFloat(prompt("Informe numericamente a base menor do trapézio:"))
    const baseMaior = parseFloat(prompt("Informe numericamente a base maior do trapézio:"))
    const altura = parseFloat(prompt("Informe numericamente a altura do trapézio:"))
    return (baseMaior + baseMenor) * altura / 2
}

function calcularAreaCirculo() {
    const raio = parseFloat(prompt("Informe numericamente o raio do círculo:"))
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(
        "O que você deseja calcular usando a Calculadora Geométrica?\n" +
        "1. Calcular área de triângulo;\n" +
        "2. Calcular área de retângulo;\n" +
        "3. Calcular área de quadrado;\n" +
        "4. Calcular área de trapézio;\n" +
        "5. Calcular área de círculo;\n" +
        "6. Não desejo calcular nada;\n"
    )
}

function executar() {
    let opcao = ""
    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
        case "1":
            resultado = calcularAreaTriangulo()
            break
        case "2":
            resultado = calcularAreaRetangulo()
            break
        case "3":
            resultado = calcularAreaQuadrado()
            break
        case "4":
            resultado = calcularAreaTrapezio()
            break
        case "5":
            resultado = calcularAreaCirculo()
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
            break
        }

        if (resultado) {
            alert("Resultado: " + resultado)
        }

    } while (opcao !== "6");
}

executar()