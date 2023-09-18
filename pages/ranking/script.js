let listaJogadores = []

const getList = localStorage.getItem("listaJogadores");
if(getList !== null){
    listaJogadores = JSON.parse(getList);

    const ranking = document.querySelector("#ranking");



    listaJogadores.forEach((jogador, indice) => {
        const jogadorItem = document.createElement("li");

        const conteudoItem = document.createElement("div");
        conteudoItem.className = "conteudo-item"

        const classificacao = document.createElement("span");
        classificacao.className = "classificacao";
        classificacao.textContent = `${indice + 1}° ${jogador.nome}`

        const showPontuacao = document.createElement("span");
        showPontuacao.className = "pontuacao"
        showPontuacao.textContent = `${jogador.pontuacao} `;

        conteudoItem.appendChild(classificacao);
        conteudoItem.appendChild(showPontuacao);

        jogadorItem.appendChild(conteudoItem);
        jogadorItem.className = "ranking-card";
        jogadorItem.style.color = "#fff";

        ranking.append(jogadorItem);
    })
} else {
    const msg = document.createElement("h2");
    msg.textContent = "Você ainda não possui um ranking"
    msg.style.width = '100%'
    msg.style.textAlign = 'center'
    msg.style.fontFamily = "Verdana"
    msg.style.marginTop = "8vw"
    ranking.append(msg);


}

document.querySelector(".clear-rank").addEventListener("click", function(){
    localStorage.clear();
    window.location.href = "../ranking/index.html";
});
document.querySelector("#logo").addEventListener("click", function(){
    window.location.href = "../../index.html";
})