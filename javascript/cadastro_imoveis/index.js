const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Seja bem-vindo (a) ao cadastro de imóveis! \n" +
        "O total de imóveis é: " + imoveis.length +
        "\n\n Escolha uma das seguintes opções: \n1. Cadastrar novo imóvel; \n2. Listar Imóveis; \n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel")
            imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
            imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem
            )

            if (confirma) {
                imoveis.push(imovel)
            }
        
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui Garagem? " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando o programa.")
            break
        default: 
            alert("Opção Inválida!")
            break

    }
} while (opcao !==3)