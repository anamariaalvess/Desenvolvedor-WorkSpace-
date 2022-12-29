const nomePersonagem1 = prompt("Informe o nome do primeiro personagem")
const poderAtaquePersonagem1 = prompt("Informe o poder de ataque do primeiro personagem")

const nomePersonagem2 =  prompt("Informe o nome do segundo personagem")
let pontosVida = prompt("Informe, em valores númericos, os pontos de vida do segundo personagem.")
const poderDefesa = prompt("Informe, em valores númericos, os pontos de defesa do segundo personagem.")
const escudo = prompt("Informe sim caso o personagem 2 tenha escudo e não caso o personagem não tenha escudo.")

let newPontosVida = 0

if (poderAtaquePersonagem1 > poderDefesa && escudo == "sim"){
    const dano = poderAtaquePersonagem1 - poderDefesa
    newPontosVida = pontosVida - dano
    alert("O nome do Personagem 1 é \n" + nomePersonagem1 + "\n o poder de ataque do personagem 1 é \n" + poderAtaquePersonagem1)
    alert("O nome do Personagem 2 é \n" + nomePersonagem2 + "\n o número de pontos de vida do personagem 2 é \n" + newPontosVida + "\n a quantidade de dano que ele sofreu é \n" + dano)
}
else if (poderAtaquePersonagem1 > poderDefesa && escudo != "sim"){
    const dano = (poderAtaquePersonagem1 - poderDefesa) / 2
    newPontosVida = floatPontosVida - dano
    alert("O nome do Personagem 1 é \n" + nomePersonagem1 + "\n o poder de ataque do personagem 1 é \n" + poderAtaquePersonagem1)
    alert("O nome do Personagem 2 é \n" + nomePersonagem2 + "\n o número de pontos de vida do personagem 2 é \n" + newPontosVida + "\n a quantidade de dano que ele sofreu é \n" + dano)
}
else {
    const dano = 0
    newPontosVida =pontosVida - dano
    alert("O nome do Personagem 1 é \n" + nomePersonagem1 + "\n o poder de ataque do personagem 1 é \n" + poderAtaquePersonagem1)
    alert("O nome do Personagem 2 é \n" + nomePersonagem2 + "\n o número de pontos de vida do personagem 2 é \n" + newPontosVida + "\n a quantidade de dano que ele sofreu é \n" + dano)
}
