const form = document.querySelector("#form")
const tabDo = document.querySelector("#tab-do")
const multAte = document.querySelector("#mult-ate")

const resultado = document.querySelector("#resultado")

// console.log(form, tabDo, multAte)

const createTable = function (number, multNumber) {
    paragrafo = document.createElement("p")

    resultado.innerHTML = `${paragrafo}` // error

    for(i = 1; i < multNumber; )
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const tabNumber = +tabDo.value
    const multNumber = +multAte.value

    // console.log(tabNumber, multNumber)
    
    if(!tabNumber || !multNumber) return

    createTable(tabNumber, multNumber)
})