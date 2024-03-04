// Propriedades --> ""Variáveis"" . []
// Métodos --> ""Funções"" .

// var = {    --> Objetos
//      a: x, --> var.a === x
// }

// var.b = y --> nova propriedade
// delete var.b --> deleta alguma prop
// array --> lista de itens (strings, nums, objs)

// var instanceof Object --> True

// var2 = {}
// Object.assign(var2, var) --> Copia do var para var2

// metodo Object.keys() --> chaves
// metodo Object.entries() --> valores

// a = {}
// b = a
// a === b ---> true
// a.x = 1
// a = {x:1} // b = {x:1}

// .push() --> adiciona elemento no fim do array
// .pop() --> remove no fim

// .shift() --> remove no começo
// .unshift() --> adiciona no inicio
// Obs: podem ser mais de um elemento

// .indexOf() // .lastIndexOf()
// Ex: var3 = [1, 2, 3, 1]]
// var3.indexOf(2) === 1
// var3.lastIndexOf(1) === 3

// .slice() --> Extrair um array menor de outro array maior
// .slice(começo, fim+1)
// .slice(começo) ---> vai até o fim do array

// .forEach() --> método de repetição --> percorre cada um dos elementos do array
// Ex: nums = [1,2,3,4]
//     nums.forEach((numero) => {
//          console.log(numero)   --> imprime cada um dos elementos
//     }) 

// .includes() --> verifica se o array tem um elemento (booleano)

// .reverse() --> Inverte a ordem do array
// Obs: cuidado! pois ele modifica o array original

// metodos de strings //

// .trim() --> remove da var todo texto que não é string (num, bool, special caract...)

// .split() --> divide string em array
// podemos determinar o separador em comum
// Ex: .split(" ")

// .join() --> une a lista em string
// tambem tem separador
// Ex: .join(", ") --> "a, e, i, o, u"
//     .join("") --> "aeiou"

// .repeat(n) --> Repete um texto n vezes --> n é o numero que colocamos como seu argumento

// rest operator/rest parameters --> infinitos parametros
// Ex somainfinita = (...arg) => {
//      for {
//          total += arg          --> podemos passar indeterminados argumentos
//      }
// }
// Obs: função não está completa

// destructuring --> funcionalidade que desestrutura algum dado
// é possivel criar variaveis a partir das propriedades dos objetos
//Ex: const obj = {a:1, b:2, c:3} --> objeto
//    const {a, b, c} = obj --> destructuring --> criei variaveis
//
//    no caso de renomear variaveis:
//    const (a: a2) = obj

// destructuring em arrays --> menos usado
// const arr = [a, b, c]
// const [letraA, letraB, letraC] -- criei variaveis

// JSON - JavaScript Object Notation
// formatação rigorosa, pois é a ponte entre Front-End e API. Vai dar erro se não for da forma adequada
// Ex: const myJson = '{"name": "Rogerio", "age": 19, "skills": ["HTML", "CSS", "Python", "JS"]}'

// Conversão de JSON
// JSON.stringify(meu json) --> transforma json em obj --> usar no programa ao receber um json
// JSON.parse(meu obj) --> transforma obj em json --> usar para mandar um json até a api