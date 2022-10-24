//declarando objeto 
let rafa = { nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
let paulo = { nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

function calculaPontos(jogador) {
    let pontos = jogador.vitorias * 3 + jogador.empates
    return pontos
}
//array
let jogadores = [rafa, paulo]

jogadores.push ({nome:"Lucas", vitorias: 0,empates:0, derrotas:0, pontos:0})

//função para chamar tabela na pg onde i percorre array de jogadores 
function exibeJogadoresNaTela(jogadores) {
    
    let elemento = ""

    for (let i = 0; i < jogadores.length; i++) {

        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onclick='adicionarVitoria("+ i + ")'>Vitória</button></td>"
        elemento += "<td><button onclick='adicionarEmpate("+ i + ")'>Empate</button></td>"
        elemento += "<td><button onclick='adicionarDerrota("+ i + ")'>Derrota</button></td>"
        elemento += "</tr >"
    }

    let tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
    
}

exibeJogadoresNaTela(jogadores)
//o i também é utilizado nas funções
function adicionarVitoria(i){
    let jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
    let jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    let jogador = jogadores[i]
    jogador.derrotas++
    exibeJogadoresNaTela(jogadores)
}