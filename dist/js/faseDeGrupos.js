"use strict";
class FaseDeGrupos {
    constructor() {
        this._allTeams = [];
        this._timesQuePassaram = [];
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
        this.passaTimesDeFase();
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
    passaTimesDeFase() {
        console.log('Times que passaram de fase:');
        let z = 0;
        var grupo;
        for (let index = 0; index < 32; index += 4) {
            grupo = new Array;
            grupo.push(this._allTeams[index]);
            grupo.push(this._allTeams[index + 1]);
            grupo.push(this._allTeams[index + 2]);
            grupo.push(this._allTeams[index + 3]);
            this.verificaColocacao(grupo);
            console.log('Campeao: ' + grupo[0].nome);
            console.log('Vice: ' + grupo[1].nome);
            //adicionando a lista dos times que vão para o mata mata
            this._timesQuePassaram.push(grupo[0]);
            this._timesQuePassaram.push(grupo[1]);
            // this.proximaFase();
            // console.log(grupo[z]+ ' ' + grupo[z+1]);
            z += 2;
        }
    }
    verificaColocacao(grupo) {
        console.log("Entramos no Verifica Colocacao\nGrupo pre sorted: " + grupo[0].nome + " Pontos: " + grupo[0].pontuacao + " " + grupo[1].nome + " Pontos: " + grupo[1].pontuacao + " " + grupo[2].nome + " Pontos: " + grupo[2].pontuacao + " " + grupo[3].nome + " Pontos: " + grupo[3].pontuacao + " ");
        grupo = grupo.sort((x, y) => y.pontuacao - x.pontuacao);
        console.log("Grupo pos sorted: " + grupo[0].nome + " Pontos: " + grupo[0].pontuacao + " " + grupo[1].nome + " Pontos: " + grupo[1].pontuacao + " " + grupo[2].nome + " Pontos: " + grupo[2].pontuacao + " " + grupo[3].nome + " Pontos: " + grupo[3].pontuacao + " ");
        //verificando se não há empates na pontuação
        // for (let index = 0; index < 3; index++) 
        // {
        //     if (grupo[index].pontuacao == grupo[index+1].pontuacao)
        //     {
        //         if(grupo[index].vitorias>grupo[index+1].vitorias){
        //             break;
        //         }    
        //         else if (grupo[index+1].vitorias>grupo[index].vitorias) {
        //             var maior = grupo[index+1];
        //             grupo[index+1] = grupo[index];
        //             grupo[index] = maior;
        //         }
        //     }            
        // }
    }
    proximaFase() {
        console.log('para proxima fase');
        for (let index = 0; index < this._timesQuePassaram.length; index++) {
            console.log('Equipe ' + index + ' ' + this._timesQuePassaram[index].nome);
        }
    }
}
