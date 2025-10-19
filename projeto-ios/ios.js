const botaoVoltar = document.querySelector("span.voltar")

function tammanhoDiferente() {
    if (window.innerWidth >= 768) {
    itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
    }

function ClickMenuinterativo() {
if (itens.style.display == 'block') {
    itens.style.display = 'none'
} else {
    itens.style.display = 'block'
}
}

function voltarTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
botaoVoltar.addEventListener("click", voltarTopo)





