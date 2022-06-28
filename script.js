<<<<<<< HEAD
const resultado = document.querySelector('[data-js="mostrarMenssagem"]')
const botao = document.querySelector('[data-js="botaoCalcularIMC"]')

botao.addEventListener('click', e => {
    e.preventDefault()

    const altura = document.querySelector('[data-js="altura"]')
    const peso = document.querySelector('[data-js="peso"]')

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
=======
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const resultado = document.querySelector('#imc')
const botao = document.querySelector('button')
const formulario = document.querySelector('form')

altura.addEventListener('focus', e => {resultado.innerHTML = ''})
peso.addEventListener('focus', e => {resultado.innerHTML = ''})

formulario.addEventListener('submit', e => {
    e.preventDefault()

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
>>>>>>> 8de0bc2796132eb5f733a005410f04580569be86
})