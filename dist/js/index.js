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
async function load() {
    teams = await fetchTeams();
    console.log(teams);
    for (let index = 0; index < 32; index++) {
        // console.log('Nome '+index+': '+teams[index].Name);
        nomes[index] = teams[index].Name;
        tokens[index] = teams[index].Token;
        console.log('Nome ' + index + ': ' + nomes[index]);
        console.log('Token ' + index + ': ' + tokens[index]);
    }
    salvaFaseGrupos(nomes, tokens);
    rodaAllGames();
    // faseGrupos.jogos(); 
    // oitavas.allTeams= faseGrupos.proximaFase();
    // oitavas.jogos();
    // quartas.allTeams= oitavas.proximaFase();
    // quartas.jogos();
    // semi.allTeams = quartas.proximaFase();
    // semi.jogos();
    // finais.allTeams = semi.proximaFase();
    // finais.jogos();
}
function salvaFaseGrupos(_names, _tokens) {
    faseGrupos.salvaTimes(_names, _tokens);
    // shuffleArray(faseGrupos._allTeams);
}
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
function enviaFim() {
    let dados = new dadosFinais(finais.allTeams[0].token, finais.allTeams[1].token, finais.allTeams[0]._golsFeitosLastPartida, finais.allTeams[1]._golsFeitosLastPartida, finais.allTeams[0].golsPenalti, finais.allTeams[1].golsPenalti);
    let saidaJson = JSON.stringify(dados);
    console.log(saidaJson);
}
