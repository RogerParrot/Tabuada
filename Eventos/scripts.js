// eventos --> ações atreladas a algum comportamento do usuario

// como acionar um evento
// .addEventListenter( , ) --> 2 argumentos: tipo e o que ele vai fazer depois do evento
// const btn = document.querySelector("#btn")               --> convenção
// btn.addEventListener("click", func() {o que vai ocorrer})

// removendo eventos
// .removeEventListener()
// const btn2 = document.querySelector("#btn2")
// function imprimirMsg() {con.log("teste")}
// btn2.addEventListener("click", imprimirMsg)
// 
// btn3 = document.querySelector("#btn3")
// btn3.addEventListener("click", () => {
//     btn2.removeEventListener("click", imprimirMsg)
// })

// Objeto do evento --> todo evento possui um argumento especial que possui infos do mesmo
// event ou e (ou qualquer outro nome)
// mytitle = document.querySelector("#mytitle")
// mytitle.addEventListener("click", (e) => {
//      con.log(e)                           --> objeto cheio de propriedades
// })

// Propagação --> um elemento ativa um evento que não é dele
// .stopPropagation()
// const cb = doc.selec()
// const bic = doc.selec()
// 
// cb.addevent(click, () => {})
// bic.addevent(click, () => {e.stopPropag()})

// Ações default
// remover ações padrão do html com .preventDefault()
// a = doc.qS("a")
// a.addeevent("click", (e) => {e.preventDefault()})

// Eventos de tecla --> Ações do teclado
// keyup --> Executa quando solta a tecla
// keydown --> Executa quando pressiona
// document.addEventListener("keyup", (e) => {
//     console.log(`Soltou a tecla ${e.key}`)
// })
//
// document.addEventListener("keydown", (e) => {
//     console.log(`Apertou a tecla ${e.key}`)
// })

// Eventos do mouse
// mousedown --> Pressionou o botão do mouse
// mouseup --> Soltou o botão do mouse
// dblclick
// document.addEventListener("mouseup", (e) => {
//     console.log(`Soltou o botão`)
// })
//
// document.addEventListener("mousedown", (e) => {
//     console.log(`Apertou o botão`)
// })
//
// document.addEventListener("dblclick", (e) => {
//     console.log(`Clique duplo`)
// })

// Movimento do mouse
// mousemove
// document.addEventListener("mousemove", (e) => {
//     console.log(eixo x: e.x)
//     console.log(eixo y: e.y)
// })

// Eventos por scroll do mouse --> algo acontece se chegar em algum lugar da tela
// scroll
// window.addEventListener("scroll", (e) => {
//    if(window.pageYOffset > 200) `{
//        con.log(passou de 200px)
//    }
// })

// Eventos por foco
// focus --> dispara quando focamos em um elemento
// blur --> perde o foco do elemento
// const input = document.qS("#input")
// document.addEventListener("focus", (e) => {
//     c.log("entrou no input")
// })
// document.addEventListener("blur", (e) => {
//     c.log("saiu do input")
// })

// Eventos de carregamento da pag
// load --> evento ao carregar a pag
// beforeunload --> quando o usuario sai da pag
// window.addEventListener("load", () => {
//    
// })
// window.addEventListener("beforeunload", () => {
//    e.preventDefault()
// })

// Tecnicas de Debounce --> faz um evento disparar menos vezes
// debounce = (f, delay) => {
//     timeout 
//     return(...args) => {
//         if(timeout) {
//             clearTimeout(timeout)
//         }
//         timeout = setTimeout(() => {
//             f.apply(args)
//         }, delay)
//     }
// }
// window.addEventListener("mousemove", debounce(() =>{
//     confirm.log("Executando")
// }, 500))