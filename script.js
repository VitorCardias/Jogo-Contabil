const get_list = localStorage.getItem("listaJogadores");
let lista_players = [];

let nomeJogador = document.getElementById("nome-jogador");
const msg = document.getElementById("alert");

function checkName(lista_players){
    let i = 0;
    while(i < lista_players.length){
        if(lista_players[i].nome === nomeJogador.value){ 
            console.log("True")
            return true;
        }
        i++;
    }
    console.log("False")
    return false;
}

document.querySelector("#btn-iniciar").addEventListener("click", function(){
    if(nomeJogador.value.trim() === ""){
        msg.textContent = "Por favor, digite um nome válido!"
        msg.style.textAlign = "center";
        msg.style.fontSize = "15px";
        
        return;
    }
    else if (lista_players !== null){
        lista_players = JSON.parse(get_list);

        if(checkName(lista_players) == true){
            msg.textContent = "Nome já existe!"
            msg.style.textAlign = "center";
            msg.style.fontSize = "15px";

            return;
        }else{
            localStorage.setItem("nomeJogador", JSON.stringify(nomeJogador.value));
            window.location.href = "./pages/jogo/index.html";
        }
    }
    else {
        localStorage.setItem("nomeJogador", JSON.stringify(nomeJogador.value));
        window.location.href = "./pages/jogo/index.html";
    }
});