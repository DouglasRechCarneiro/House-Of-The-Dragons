const botesCarrosel = document.querySelectorAll(".botao");

const imagems = document.querySelectorAll(".imagem");

const informacoes = document.querySelectorAll(".informacoes");


botesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        DesativarBotaoSelecionado(botao);

        MudarImagemAtiva(indice);

        MudarInformacoesAtiva(indice);
    })
})

function MudarInformacoesAtiva(indice) {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");

    informacoesAtiva.classList.remove("ativa");

    informacoes[indice].classList.add("ativa");
}

function MudarImagemAtiva(indice) {
    const imagemAtiva = document.querySelector(".ativa");

    imagemAtiva.classList.remove("ativa");

    imagems[indice].classList.add("ativa");
}

function DesativarBotaoSelecionado(botao) {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");

    botao.classList.add("selecionado");
}
