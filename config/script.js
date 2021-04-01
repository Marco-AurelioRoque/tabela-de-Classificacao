var marco = {
    nome: "Marco", 
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 11
}


var maria = {
    nome: "Maria",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

marco.pontos = calculaPontos(marco)

function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 1) + jogador.empates
    return pontos
}

var jogadores = [marco, maria]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i = 0; i < jogadores.length; i++){
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogadores.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[1]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}