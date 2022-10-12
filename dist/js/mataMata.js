"use strict";
class MataMata {
    constructor() {
        this._allTeams = new Array;
    }
    //sempre que receber novos times, nao tera ligacao com as fases anteriores
    set allTeams(selecoes) {
        for (let i = 0; i < selecoes.length; i++) {
            let nome = selecoes[i].nome;
            let token = selecoes[i].nome;
            let time = new Selecao(nome, token);
            this._allTeams.push(time);
        }
    }
    get allTeams() {
        return this._allTeams;
    }
    jogos() {
        console.log('entramos nas partidas das oitavas');
        var partidas = new Partida();
        for (let index = 0; index < this._allTeams.length; index += 2) {
            partidas.RodaPartidaMata(this._allTeams[index], this._allTeams[index + 1]);
            console.log(this._allTeams[index].nome + ' gols = ' + this._allTeams[index]._golsFeitosLastPartida + ' ' + this._allTeams[index + 1].nome + ' gols = ' + this._allTeams[index + 1]._golsFeitosLastPartida);
        }
        // this.mostraSaldoGols();
        // this.passaTimesDeFase();
    }
    proximaFase() {
        console.log('Para proxima fase: ');
        var ganharam = new Array;
        for (let index = 0; index < this._allTeams.length; index++) {
            //console.log(this._allTeams[index].nome+' passou de fase: '+ this._allTeams[index].passouDeFase);
            if (this._allTeams[index].passouDeFase == true) {
                ganharam.push(this._allTeams[index]);
                console.log(this._allTeams[index]);
            }
        }
        return ganharam;
    }
}
