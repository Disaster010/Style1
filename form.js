function verificarLista() {

    //pegando o select
    let valorSelecionado = document.querySelector('select').value

    if (valorSelecionado == "disabled") {

        //desabilitando o input
        document.querySelector("input[name='texto']").disabled = true

        //colocar uma mensagem de DESABILITADO no paragrafo
        let paragrafo = document.querySelector('#mensagem')
        paragrafo.innerText = "DESABILITADO"

        //colocar o estilo no texto DESABILITADO
        paragrafo.style.color = 'white'
        paragrafo.style.backgroundColor = 'red'

    } else {
        document.querySelector("input[name='texto']").disabled = false

        let paragrafo = document.querySelector('#mensagem')
        paragrafo.innerText = ""
        paragrafo.style.color = "black"
        paragrafo.style.backgroundColor = "transparent"
    }
}