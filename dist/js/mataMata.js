"use strict";
class MataMata {
    constructor(fase) {
        this._cleaner = new Cleaner();
        this._allTeams = new Array;
        this._fase = fase;
    }
    //sempre que receber novos times, nao tera ligacao com as fases anteriores
    set allTeams(selecoes) {
        this._allTeams = new Array;
        for (let i = 0; i < selecoes.length; i++) {
            let nome = selecoes[i].nome;
            let token = selecoes[i].token;
            let vitorias = selecoes[i].vitorias;
            let pontos = selecoes[i].pontuacao;
            let empates = selecoes[i].empates;
            let derrotas = selecoes[i].derrotas;
            let golsFeito = selecoes[i].golsFeitos;
            let golsRecebidos = selecoes[i].golsRecebidos;
            let time = new Selecao(nome, token, vitorias, pontos, empates, derrotas, golsFeito, golsRecebidos);
            this._allTeams.push(time);
        }
        console.log(this._allTeams);
    }
    get allTeams() {
        return this._allTeams;
    }
    //Loop que roda todas as partidas entre os times I e I+1
    jogos() {
        var partidas = new Partida();
        for (let index = 0; index < this._allTeams.length; index += 2) {
            partidas.RodaPartidaMata(this._allTeams[index], this._allTeams[index + 1]);
            console.log(this._allTeams[index].nome + ' gols = ' + this._allTeams[index]._golsFeitosLastPartida + ' ' + this._allTeams[index + 1].nome + ' gols = ' + this._allTeams[index + 1]._golsFeitosLastPartida);
            this.MostraHistoricoPartida(index, index + 1);
        }
        this.mostraResultadosFase();
    }
    //Busca todos os times e retorna somente os times que possuem true na propriedade passouDeFase
    proximaFase() {
        console.log('Para proxima fase: ');
        var ganharam = new Array;
        for (let index = 0; index < this._allTeams.length; index++) {
            if (this._allTeams[index].passouDeFase == true) {
                ganharam.push(this._allTeams[index]);
                console.log(this._allTeams[index]);
            }
        }
        this.mostraProximaFase(ganharam);
        return ganharam;
    }
    MostraHistoricoPartida(i, x) {
        let historicoFase;
        //Decide em qual div vai escrever 
        switch (this._fase) {
            case 'oitavas':
                historicoFase = document.querySelector(".HistoricoMataMataOit");
                break;
            case 'quartas':
                historicoFase = document.querySelector(".HistoricoMataMataQua");
                break;
            case 'semi':
                historicoFase = document.querySelector(".HistoricoMataMataSemi");
                break;
            case 'finais':
                historicoFase = document.querySelector(".HistoricoMataMataFin");
                break;
            default:
                historicoFase = document.querySelector(".HistoricoMataMataFin");
                break;
        }
        if (this._allTeams[i]._golsFeitosLastPartida != this._allTeams[x]._golsFeitosLastPartida)
            historicoFase.innerHTML += `<p>${this._allTeams[i].nome}  ${this._allTeams[i]._golsFeitosLastPartida}  X ${this._allTeams[x]._golsFeitosLastPartida}  ${this._allTeams[x].nome}</p>`;
        else
            historicoFase.innerHTML += `<p>${this._allTeams[i].nome}  ${this._allTeams[i]._golsFeitosLastPartida} (${this._allTeams[i].golsPenalti}) X (${this._allTeams[x].golsPenalti}) ${this._allTeams[x]._golsFeitosLastPartida}  ${this._allTeams[x].nome}</p>`;
    }
    //Escrevem na tabela do html quais times passaram para próxima fase
    mostraProximaFase(confrontos) {
        switch (this._fase) {
            case 'oitavas': /*this.escreveQuartas(confrontos)*/
                this.escreveProximaFase(confrontos, 'Quartas');
                break;
            case 'quartas': /*this.escreveSemi(confrontos)*/
                this.escreveProximaFase(confrontos, 'Semi');
                break;
            case 'semi':
                this.escreveFinais(confrontos);
                break;
            default:
                break;
        }
    }
    mostraResultadosFase() {
        switch (this._fase) {
            case 'oitavas':
                this.escreveResultadoOitavas();
                break;
            case 'quartas':
                this.escreveResultadoQuartas();
                break;
            case 'semi':
                this.escreveResultadoSemi();
                break;
            default:
                this.escreveResultadoFinais();
                break;
        }
    }
    escreveResultadoOitavas() {
        cleaner.clearOitavas();
        this.escreveGolsTabela('Oitavas');
    }
    escreveResultadoQuartas() {
        cleaner.clearQuartas();
        this.escreveGolsTabela('Quartas');
    }
    escreveResultadoFinais() {
        cleaner.clearFinais();
        this.escreveGolsFinal();
    }
    escreveResultadoSemi() {
        cleaner.clearSemi();
        this.escreveGolsTabela('Semi');
    }
    escreveGolsFinal() {
        let proxima;
        proxima = document.querySelector('.Finais');
        proxima.innerHTML += `<p> ${this._allTeams[0].nome}  ${this._allTeams[0]._golsFeitosLastPartida}</p> <p> ${this._allTeams[1].nome} ${this._allTeams[1]._golsFeitosLastPartida}   </p>`;
    }
    escreveGolsTabela(fase) {
        for (let index = 0; index < this._allTeams.length; index++) {
            let proxima;
            if (index < this._allTeams.length / 2) {
                proxima = document.querySelector(`.${fase}Left`);
            }
            else {
                proxima = document.querySelector(`.${fase}Right`);
            }
            if ((index % 2) == 0) {
                proxima.innerHTML += `<p> ${this._allTeams[index].nome} ${this._allTeams[index]._golsFeitosLastPartida}</p>`;
            }
            else {
                proxima.innerHTML += `<p class="SegundoTime${fase}"> ${this._allTeams[index].nome} ${this._allTeams[index]._golsFeitosLastPartida}</p>`;
            }
        }
    }
    escreveProximaFase(confrontos, fase) {
        for (let index = 0; index < confrontos.length; index++) {
            let proxima;
            if (index < confrontos.length / 2) {
                proxima = document.querySelector(`.${fase}Left`);
            }
            else {
                proxima = document.querySelector(`.${fase}Right`);
            }
            if ((index % 2) == 0) {
                proxima.innerHTML += `<p> ${confrontos[index].nome}</p>`;
            }
            else {
                proxima.innerHTML += `<p class="SegundoTime${fase}"> ${confrontos[index].nome}</p>`;
            }
        }
    }
    escreveQuartas(confrontos) {
        for (let index = 0; index < confrontos.length; index++) {
            let proxima;
            if (index < confrontos.length / 2) {
                proxima = document.querySelector('.QuartasLeft');
            }
            else {
                proxima = document.querySelector('.QuartasRight');
            }
            if ((index % 2) == 0) {
                proxima.innerHTML += `<p> ${confrontos[index].nome}</p>`;
            }
            else {
                proxima.innerHTML += `<p class="SegundoTimeQuartas"> ${confrontos[index].nome}</p>`;
            }
        }
    }
    escreveSemi(confrontos) {
        for (let index = 0; index < confrontos.length; index++) {
            let proxima;
            if (index < confrontos.length / 2) {
                proxima = document.querySelector('.SemiLeft');
            }
            else {
                proxima = document.querySelector('.SemiRight');
            }
            if ((index % 2) == 0) {
                proxima.innerHTML += `<p> ${confrontos[index].nome}</p>`;
            }
            else {
                proxima.innerHTML += `<p class="SegundoTimeSemi"> ${confrontos[index].nome}</p>`;
            }
        }
    }
    escreveFinais(confrontos) {
        let proxima;
        proxima = document.querySelector('.Finais');
        proxima.innerHTML += `<p> ${confrontos[0].nome}</p> <p> ${confrontos[1].nome}   </p>`;
    }
}
