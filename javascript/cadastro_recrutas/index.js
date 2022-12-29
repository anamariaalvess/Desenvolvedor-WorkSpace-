const primeiroNome = prompt("Informe o primeiro nome do recruta.")
const sobrenome = prompt("Informe o sobrenome do recruta.")
const campoEstudo = prompt("Informe o campo de estudo do recruta.")
const nascimento = prompt("Informe o ano de nascimento do recruta, em números.")

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de estudo: " + campoEstudo +
    "\nIdade: " + (2022 - nascimento)
)