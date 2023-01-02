let valorDaMedida = prompt("Informe, em valor númericos, uma medida qualquer em metros.")
let metrica = prompt("Escolha uma das métricas para converter a medida informada anteriormente: \n" + "milimetros (mm) \n" + " centimetros (cm) \n" + " decimetro (dm) \n"
            + "decametro (dam) \n" + "hectometro (hm) \n" + "kilometro")
let medidaConvertida = 0


switch (metrica){
    case 'milimetros' :
        medidaConvertida = valorDaMedida*1000
        alert("A medida informada é " + valorDaMedida + " \n A métrica escolhida é " + metrica + " \n A medida convertida é " + medidaConvertida);
        break;
    case 'centimetros' :
        medidaConvertida = valorDaMedida*100
        alert("A medida informada é " + valorDaMedida + " \n A métrica escolhida é " + metrica + " \n A medida convertida é " + medidaConvertida);
        break;
    case 'decimetro' :
        medidaConvertida = valorDaMedida*10
        alert("A medida informada é " + valorDaMedida + " \n A métrica escolhida é " + metrica + " \n A medida convertida é " + medidaConvertida);
        break;
    case 'decametro' :
        medidaConvertida = valorDaMedida/10
        alert("A medida informada é " + valorDaMedida + " \n A métrica escolhida é " + metrica + " \n A medida convertida é " + medidaConvertida);
        break;
    case 'hectometro' :
        medidaConvertida = valorDaMedida/100
        alert("A medida informada é " + valorDaMedida + " \n A métrica escolhida é " + metrica + " \n A medida convertida é " + medidaConvertida);
        break;
    case 'kilometro' :
        medidaConvertida = valorDaMedida/1000
        alert("A medida informada é " + valorDaMedida + " \n A métrica escolhida é " + metrica + " \n A medida convertida é " + medidaConvertida);
        break;
    default:
        alert("A métrica escolhida é inválida.");
        break;
}