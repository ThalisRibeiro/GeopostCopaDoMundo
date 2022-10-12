"use strict";
class MataMata {
    constructor() {
        this._allTeams = new Array;
    }
    jogos() {
        console.log('entramos nas partidas das oitavas');
        var partidas = new Partida();
        for (let index = 0; index < this._allTeams.length; index += 2) {
            partidas.RodaPartida(this._allTeams[index], this._allTeams[index + 1]);
            console.log(this._allTeams[index].nome + ' gols = ' + this._allTeams[index]._golsFeitosLastPartida + ' ' + this._allTeams[index + 1].nome + ' gols = ' + this._allTeams[index + 1]._golsFeitosLastPartida);
        }
        // this.mostraSaldoGols();
        // this.passaTimesDeFase();
    }
}
