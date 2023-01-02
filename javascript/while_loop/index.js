let nomeTurista = prompt("Informe o seu nome.")
let cidades = ""
let count = 0
let loop = prompt("Você já visitou alguma cidade? \n" + "Sim \n" + "Não")

while (loop === "Sim"){
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    count ++
    loop = prompt("Você visitou alguma outra cidade? \n" + "Sim \n" + "Não")
}

alert(
    "Nome do(a) Turista: " + nomeTurista +
    "\nQuantidade de cidades visitadas: " + count +
    "\nLista das Cidades visitadas:\n" + cidades
)