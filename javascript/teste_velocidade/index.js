const veiculo1 = prompt("Informe o nome do primeiro veículo")
const velocidade1= prompt("Informe, em números, a velocidade do primeiro veículo")
const veiculo2 = prompt("Informe o nome do segundo veículo")
const velocidade2= prompt("Informe, em números, a velocidade do segundo veículo")

const x = parseFloat(velocidade1)
const y = parseFloat(velocidade2)

if (x > y){
    alert("O veículo \n" + veiculo1 + "é mais rápido que o veículo \n" + veiculo2)
}
else if ( x < y){
    alert("O veículo \n" + veiculo2 + "é mais rápido que o veículo \n" + veiculo1)
}
else{
    alert("O veículo \n" + veiculo1 + "tem a mesma velocidade que o veículo \n" + veiculo2)
}