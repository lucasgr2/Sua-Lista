var nameitem = document.querySelector("#input-text")
var adicionar = document.querySelector("#adicionar")
var local = document.querySelector("#container")
var span = document.querySelector(".span-quant")
let i = 1
let itens = []



adicionar.addEventListener("click", (e) => {
    let name = {
        nam: nameitem.value,
        id: i
    }
    adicionartarefa(name)
    i++

})


function adicionartarefa(name) {
    let item = estrutura(name)
    local.appendChild(item)

}

function estrutura(name) {

    let div10 = document.createElement("div")
    div10.id = name.id
    div10.classList.add("container-itens")

    let div11 = document.createElement("div")
    div11.classList.add("item")

    let input = document.createElement("input")
    input.type = "checkbox"
    input.id = `input${i}`
    input.setAttribute("onclick", "greenscreens(`" + input.id + "`," + div10.id + ")")

    let span = document.createElement("span")
    span.innerHTML = name.nam

    let div12 = document.createElement("div")
    div12.classList.add("item-interactions")

    let img = document.createElement("img")
    img.src = "assets/angulo-esquerdo.png"
    img.id = `img${i}`


    let span2 = document.createElement("span")
    span2.id = `span${i}`
    span2.innerHTML = "1"
    span2.classList.add(i)
    // coloquei a chamada do img aqui só pra conseguir acessar o id do span2
    img.setAttribute("onclick", "addquantitens('" + img.id + "','" + span2.id + "'," + 1 + ")")

    let img2 = document.createElement("img")
    img2.src = "assets/angulo-direito.png"
    img2.id = `img2${i}`
    img2.setAttribute("onclick", "addquantitens('" + img2.id + "','" + span2.id + "')")

    let img3 = document.createElement("img")
    img3.src = "assets/cruz.png"
    img3.classList.add("cruz")
    img3.setAttribute("onclick", "excluir(" + div10.id + ")")

    div10.appendChild(div11)
    div10.appendChild(div12)
    div11.appendChild(input)
    div11.appendChild(span)
    div12.appendChild(img)
    div12.appendChild(span2)
    div12.appendChild(img2)
    div12.appendChild(img3)

    return div10
}

function greenscreens(idinput, idiv) {
    let input = document.getElementById("" + idinput + "")
    let div = document.getElementById("" + idiv + "")
    if (input.checked) {
        div.style.backgroundColor = '#3afa00a9';
    } else {
        div.style.backgroundColor = 'coral';
    }

}





function addquantitens(idtarefa, span, id = null) {
    let img = document.getElementById("" + idtarefa + "")
    if (img && id == 1) {
        let num = parseInt(document.getElementById("" + span + "").innerHTML)
        let span2 = document.getElementById("" + span + "")
        num = num - 1
        span2.innerHTML = num
    } else if (img) {
        let num = parseInt(document.getElementById("" + span + "").innerHTML)
        let span2 = document.getElementById("" + span + "")
        num = num + 1
        span2.innerHTML = num
    }
}


function excluir(idtarefa) {
    let div = document.getElementById("" + idtarefa + "")
    if (div) {
        local.removeChild(div)
    }
}



