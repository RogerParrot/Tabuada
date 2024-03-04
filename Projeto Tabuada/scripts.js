const numero = document.querySelector("#numero")
const multiplicador = document.querySelector("#multiplicador")
const formulario = document.querySelector(".formulario")
const gerar_tabuada = document.querySelector(".gerar_tabuada")

const createTable = (numero, multiplicatornNumber) => {
    gerar_tabuada.innerHTML = ""
    for (i = 1; i <= multiplicatornNumber; i++) {
        const result = Number * i
        const template = `<div class="row">
            <div class="operacao">${numero} x ${i} = </div>
            <div class="resultado">${result}</div>
        </div>`

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")
        gerar_tabuada.appendChild(row)
    }
}

multiplicador.addEventListener("submit", (e) => {
    e.preventDefault()

    const multiplicationNumber = +numero.value
    const multiplicatorNumber = +multiplicador.value

    if(!multiplicationNumber || !multiplicatorNumber) return
    
    createTable(multiplicationNumber, multiplicatorNumber)
})