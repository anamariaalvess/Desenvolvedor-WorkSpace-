const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas no Baralho: " + baralho.length +
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair."
    )

    switch(opcao) {
        case "1":
            const novaCarta = prompt("Qual é a carta?")
            baralho.push(novaCarta)
            break
        case "2":
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert("Não há nenhuma carta no baralho!")
            } else {
                alert("Você puxou uma carta " + cartaPuxada)
            }
        break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida!")
    }
} while(opcao !==3)