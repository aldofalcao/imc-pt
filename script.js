const resultado = document.getElementById("imc")

const limpar = () => resultado.innerHTML = ''

const calcular = () => {
    const botao = document.getElementById("btn")
    const altura = document.getElementById("altura")
    const peso = document.getElementById("peso")

    if (altura.value === '' || peso.value === '') {
        resultado.innerHTML = 'Preencha os campos'
    } else if (altura.value <= 0 || peso.value <= 0) {
        resultado.innerHTML = 'Dados inválidos'
    } else {
        const imc = (peso.value / ((altura.value / 100) ** 2)).toFixed(1)
        let classificacao = ''

        if (imc < 16) {
            classificacao = 'Muito abaixo do peso'
        } else if (imc < 18.5) {
            classificacao = 'Abaixo do peso'
        } else if (imc < 25) {
            classificacao = 'Peso normal'
        } else if (imc < 30) {
            classificacao = 'Sobrepeso'
        } else if (imc < 35) {
            classificacao = 'Obesidade grau I'
        } else if (imc < 40) {
            classificacao = 'Obesidade grau II'
        } else {
            classificacao = 'Obesidade grau III'
        }

        resultado.innerHTML = `IMC ${imc} <br> ${classificacao}`
        altura.value = ''
        peso.value = ''
    }

    botao.blur()
}