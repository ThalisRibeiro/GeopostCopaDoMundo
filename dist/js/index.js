"use strict";
var teams;
let oitavas = new MataMata('oitavas');
let quartas = new MataMata('quartas');
let semi = new MataMata('semi');
let finais = new MataMata('finais');
let faseGrupos = new FaseDeGrupos();
load();
async function load() {
    teams = await fetchTeams();
    let nomes = new Array;
    var tokens = new Array;
    console.log(teams);
    for (let index = 0; index < 32; index++) {
        // console.log('Nome '+index+': '+teams[index].Name);
        nomes[index] = teams[index].Name;
        tokens[index] = teams[index].Token;
        console.log('Nome ' + index + ': ' + nomes[index]);
        console.log('Token ' + index + ': ' + tokens[index]);
    }
    salvaFaseGrupos(nomes, tokens);
    faseGrupos.jogos();
    oitavas.allTeams = faseGrupos.proximaFase();
    oitavas.jogos();
    quartas.allTeams = oitavas.proximaFase();
    quartas.jogos();
    semi.allTeams = quartas.proximaFase();
    semi.jogos();
    finais.allTeams = semi.proximaFase();
    finais.jogos();
}
function salvaFaseGrupos(_names, _tokens) {
    faseGrupos.salvaTimes(_names, _tokens);
}
// faseGrupos.mostraTodosTimes();
// function loop(){
//     for(let index = 0; index<32;index++){
//         console.log('Nome '+index+': '+teams[0].Name);
//     }
//}
// var teamsRandom = teams.sort(() => Math.random() - 0.5)
// for (let index = 0; index < teams.length; index++) {
//     // console.log(teamsRandom[index].Name);
// }
