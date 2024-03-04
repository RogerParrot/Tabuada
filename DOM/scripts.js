// JS no navegador

// Protocolos da web --> Forma de comunicação entre computadores através da rede (Ex: HTTP)

// URLs --> cada arquivo carrgado no navegador tem uma --> encriptação

// HTTP é executado quando houver um link entre um arquivo e outro (Ex: HTML e JS: tag script)

// DOM

// Movendo-se pelo DOM
// document.body --> todos os elementos podem ser acessados por ele
// console.log(document.body.childNodes) --> acessa todos os elementos filhos/childnodes (h2, div, footer, li ...)
// console.log(document.body.childNodes[1].childNodes)

// Encontrando elementos por tag
// .getElementsByTagName() --> seleciona elementos por 1 tag em comum
// listitens = document.getElementosByTagName("li") --> pega todos os li e reune em lista

// .getElementByID() --> seleciona um unico elemento pois o id é unico
// --> retorna string como valor id
// document.getElementByID("title")

// .getElementsByClassName() --> seleciona um conjunto de elementos por uma classe em comum
// --> argumento string
// document.getElementsByClassName("product")

// encontrando elementos por CSS
// .querySelectorAll() // .querySelector()
// document.querySelectorAll(".product") --> pega/seleciona lista com os elementos
// document.querySelector("#main-container") --> pega/seleciona o elemento

// Alterando o HTML pelo DOM
// .insertBefore() --> Insere um elemento antes do outro
// .appendChild() --> Insere um elemento dentro do outro
// .replaceChild() --> Troca um elemento pelo outro

// Alterando com .insertBefore()
// é necessário criar um elemento com JS com .createElement()
// p = document.createElement("p") --> criou a tag p
// header = title.parentElement
// header.inserBefore(p, title) --> antes do titulo eu insiro o paragrafo

// Alterando com .appendChild()
// navLinks = document.querySelector("nav ul") --> Elememnto pai: ul de nav
// li = document.createElement("li")
// navLinks.appendChild(li)

// Alterando com .replaceChild()
// --> precisamos de um elemento pai
// --> tambem precisamos de um elemento pra ser substituido e um que vá substituir
// h2 = document.createElement("h2")
// h2.textContent = "Meu novo titulo" --> seta o texto do titulo
// header.replaceChild(h2, title) --> trocou title por h2

// Criando nós de texto
// .createTextNode()
// myText = document.createTextNode("Agora vamos colocar mais um titulo")
// h3 = document.createElement("h3")
// h3.appendChild(myText) --> insere o myText dentro do h3

// Alterando atributos
// .getAttribute() --> só leva o nome do atributo como arg
// .setAttribute() --> leva o nome e o valor que vamos substituir
// firstLink = navLinks.querySelector("a") --> só o primeiro elemento
// firstLink = setAttribute("href", "https://www.google.com") --> alterou o atributo href do a
// firstLink.getAttribute("href") --> recebe o atributo

// Altura e largura dos elementos
// offSetWidth e offSetHeight --> pegamos o valor de largura e altura dos elementos
// clientWidth e clientHeight --> desconsideramos as bordas
// footer = document.querySelector("footer") --> selecionamos o elemento (no caso é a tag footer)
// footer.offSetWidth
// footer.offSetHeight
// footer.clientWidth
// footer.clientHeight

// Posição do elemento
// .getClientBoundingRect()
// --> podemos acessar várias informações do elemento (como eixo X, Y, altura, largura, etc)
// product1 = products[0] --> acessei o primeiro item de products
// product1.getBoundingClientRect() --> demais infos

// Estilos com JS
// todos os elementos possuem uma propriedade style, que podemos alterar com css
// mainContainer.style.color = "blue" --> alteramos a cor do main container com JS
// mainContainer.style.backgroundColor = "#333"

// Alterando estilos de HMTLCollection --> aparece quando selecionamos vvarios itens de uma vez
// podemos passar pelos elementos com for off
// for(const li of listItens) {
//      li.style.backgroundColor = "red" --> altera a cor dos estilos das lis
// }