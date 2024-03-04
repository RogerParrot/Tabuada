// setTimeout() --> Executa ação após um certo tempo escolhido
// setTimeOut(function() {
//      ação
// }, 2000) ---> 2000ms ou 2s

// setInterval() --> Semelhante à settimeout, entretanto não para de ser executada (como um loop)
// setInterval(function() {
//      ação
// }, 2000)

// Promises --> Prometendo que vai ter um valor resultante daquela ação
// Ex: const promessa = Promise.resolve(5 + 5)
//
// promessa.then(value => {
//      ação                --> Executa depois de todo código síncrono
// })

// falha nas promises
// catch()
// Promise.resolve(4 * "asd")
// .then((n) => {
//    if(Number.isNaN(n) {
//        throw new Error("Valores inválidos")
//    }
// })
// .catch((err) => consolelog("erro {err}"))

// rejeitando promises --> rejeita um valor que não estamos querendo utilizar
// reject()
// function checkNumber(n) {
//     return new Promise.((resolve, reject) => {
//           if(n>10) {
//               resolve("O num é maior que 10")
//           } else {
//               reject new Error("Número muito baixo")
//           }
//     })
// }

// const x = checknumber(n) --> n > 10 === fullfield
//                          --> n < 10 === rejected

// resolvendo varias promises ---> método all
// promessas --> p1 p2 p3
// Promise.all([p1, p2, p3]).then((values) => con.log(values))

// Async functions --> retornam promises e recebem o resultado depois
// async function somarComDelay(a, b) {
//     return a + b                     --> manda depois do sincrono
// }

// Instrução Await --> serve para aguardar o resultado de uma async function
// func resolveComDelay() {
//    return new Promise(resolve => {
//       setTimeOut(() => {
//          resolve("Resolveu a promise")
//       }, 2000)
//    })
// }
//
// async function chamadaAsync() {
//    // esperando
//    const result = await resolveComDelay()
//    conlog(chegou {result})
// }
//
// chamadaAsync()

// Generators --> semelhantes as promises --> ações pausadas e continuadas depois --> *
// function* generator() {
//    yield 1
//    yield 2
//    yield 3 ...
// }
// const gen = generator()
// conlog(gen.next().value) ---> 1
// conlog(gen.next().value) ---> 2
// conlog(gen.next().value) ---> 3