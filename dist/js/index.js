"use strict";
var teams;
let oitavas = new MataMata('oitavas');
let quartas = new MataMata('quartas');
let semi = new MataMata('semi');
let finais = new MataMata('finais');
let faseGrupos = new FaseDeGrupos();
let nomes = new Array;
var tokens = new Array;
load();
//Busca na api os dados dos times
async function load() {
    teams = await fetchTeams();
    console.log(teams);
    for (let index = 0; index < 32; index++) {
        nomes[index] = teams[index].Name;
        tokens[index] = teams[index].Token;
        console.log('Nome ' + index + ': ' + nomes[index]);
        console.log('Token ' + index + ': ' + tokens[index]);
    }
    salvaFaseGrupos(nomes, tokens);
    rodaAllGames();
}
//pega os dados da api e joga na fase de grupo
function salvaFaseGrupos(_names, _tokens) {
    faseGrupos.salvaTimes(_names, _tokens);
}
//muda de forma aleatória os grupos da copa
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function rodaAllGames() {
    shuffleArray(faseGrupos._allTeams);
    faseGrupos.jogos();
    oitavas.allTeams = faseGrupos.proximaFase();
    oitavas.jogos();
    quartas.allTeams = oitavas.proximaFase();
    quartas.jogos();
    semi.allTeams = quartas.proximaFase();
    semi.jogos();
    finais.allTeams = semi.proximaFase();
    finais.jogos();
    enviaFim();
}
function rodaNewGame() {
    apagaAllProgress();
    salvaFaseGrupos(nomes, tokens);
    rodaAllGames();
}
function apagaAllProgress() {
    faseGrupos.apagaProgresso();
    faseGrupos.apagaHistorico();
    faseGrupos.apagaTabela();
}
async function enviaFim() {
    let dados = new dadosFinais(finais.allTeams[0].token, finais.allTeams[1].token, finais.allTeams[0]._golsFeitosLastPartida, finais.allTeams[1]._golsFeitosLastPartida, finais.allTeams[0].golsPenalti, finais.allTeams[1].golsPenalti);
    let saidaJson = JSON.stringify(dados);
    await finalSend(saidaJson);
}
