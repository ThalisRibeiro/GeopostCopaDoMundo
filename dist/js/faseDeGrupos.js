"use strict";
class FaseDeGrupos {
    constructor() {
        this._allTeams = [];
    }
    salvaTimes(nomes, tokens) {
        var time = new Selecao;
        console.log("Chegamos em SalvaTimes");
        for (let index = 0; index < nomes.length; index++) {
            console.log("Nome " + index + ": ");
            time = new Selecao(nomes[index], tokens[index]);
            console.log(time.nome);
            this._allTeams.push(time);
        }
    }
    jogos() {
        var partidas = new Partida();
        for (let index = 0; index < this._allTeams.length; index += 4) {
            for (let i = index; i < index + 3; i++) {
                for (let x = i + 1; x < index + 4; x++) {
                    partidas.RodaPartida(this._allTeams[i], this._allTeams[x]);
                    console.log(this._allTeams[i].nome + ' gols = ' + this._allTeams[i]._golsFeitosLastPartida + ' ' + this._allTeams[x].nome + ' gols = ' + this._allTeams[x]._golsFeitosLastPartida);
                }
            }
        }
        this.mostraSaldoGols();
    }
    mostraSaldoGols() {
        for (let index = 0; index < this._allTeams.length; index++) {
            console.log("Pontos do " + this._allTeams[index].nome + ": " + (this._allTeams[index].pontuacao));
            console.log("Saldo de gols do " + this._allTeams[index].nome + ": " + (this._allTeams[index].golsFeitos - this._allTeams[index].golsRecebidos));
        }
    }
    mostraTodosTimes() {
        console.log("Times na fase de grupo: ");
        for (let index = 0; index < 32; index++) {
            console.log('Nome ' + index + ': ' + this._allTeams[index].nome);
            console.log('Token ' + index + ': ' + this._allTeams[index].token);
        }
    }
}
