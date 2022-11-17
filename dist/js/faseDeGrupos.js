"use strict";
class FaseDeGrupos {
    constructor() {
        this._allTeams = [];
        this._timesQuePassaram = [];
        this._timesColocacao = [];
        this._alfabeto = [];
        this._alfabeto.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H');
    }
    //recebe as duas strings da api e adiciona no array que possui todos os times 
    salvaTimes(nomes, tokens) {
        var time = new Selecao;
        this._timesColocacao = new Array;
        this._allTeams = new Array;
        for (let index = 0; index < nomes.length; index++) {
            time = new Selecao(nomes[index], tokens[index]);
            this._allTeams.push(time);
        }
    }
    //Como tá na fase de grupos, cada time possui 3 partidas, um contra cada equipe do grupo
    //primeiro roda os 3 jogos do primeiro time, dps 2 jogos do segundo time (2 pois já possui 1 jogo com o primeiro), e o jogo final entre penúltimo e ultimo do grupo  
    jogos() {
        var partidas = new Partida();
        for (let index = 0; index < this._allTeams.length; index += 4) {
            for (let i = index; i < index + 3; i++) {
                for (let x = i + 1; x < index + 4; x++) {
                    partidas.RodaPartida(this._allTeams[i], this._allTeams[x]);
                    console.log(this._allTeams[i].nome + ' gols = ' + this._allTeams[i]._golsFeitosLastPartida + ' ' + this._allTeams[x].nome + ' gols = ' + this._allTeams[x]._golsFeitosLastPartida);
                    this.MostraHistoricoPartida(i, x);
                }
            }
        }
        this.passaTimesDeFase();
    }
    //Mostra os times dividos em uma tabela para cada grupo
    //Z serve para escrever qual grupo vai ser escrito
    mostraTodosTimes() {
        let z = 0;
        for (let index = 0; index < 29; index += 4) {
            const divGrupos = document.querySelector('.FaseDeGrupos');
            divGrupos.innerHTML += `
            <h3 class="NomeGrupo"> GRUPO ${this._alfabeto[z]} </h3>
            <table> 
                <thead> 
                    <tr>
                    <th>Nome</th>
                    <th>Vitorias</th>
                    <th>Saldo de Gols</th>
                    <th>Pontos</th>
                    </tr>
            </thead>
                <tbody>
                    <tr>
                        <td class="Passou">${this._timesColocacao[index].nome}</td> 
                        <td class="Passou">${this._timesColocacao[index].vitorias}</td>
                        <td class="Passou">${this._timesColocacao[index].saldoGols}</td>
                        <td class="Passou">${this._timesColocacao[index].pontuacao}</td>   
                    </tr>
                    <tr>
                        <td class="Passou">${this._timesColocacao[index + 1].nome}</td> 
                        <td class="Passou">${this._timesColocacao[index + 1].vitorias}</td>
                        <td class="Passou">${this._timesColocacao[index + 1].saldoGols}</td>
                        <td class="Passou">${this._timesColocacao[index + 1].pontuacao}</td>   
                    </tr>
                    
                    <tr>
                        <td>${this._timesColocacao[index + 2].nome}</td> 
                        <td>${this._timesColocacao[index + 2].vitorias}</td>
                        <td>${this._timesColocacao[index + 2].saldoGols}</td>
                        <td>${this._timesColocacao[index + 2].pontuacao}</td>   
                    </tr>
                    <tr>
                        <td>${this._timesColocacao[index + 3].nome}</td> 
                        <td>${this._timesColocacao[index + 3].vitorias}</td>
                        <td>${this._timesColocacao[index + 3].saldoGols}</td>
                        <td>${this._timesColocacao[index + 3].pontuacao}</td>   
                    </tr>
                </tbody>
            </table>`;
            z += 1;
        }
    }
    //Recebe os dois index dos times que jogaram e coloca no html o resultado
    //Divide entre duas divs para cortar pela metade o tamanho do histórico da fase de grupo
    MostraHistoricoPartida(i, x) {
        let historicoGrupos = document.querySelector('.HistoricoGrupos');
        if (i > 14) {
            historicoGrupos = document.querySelector('.HistoricoGrupos2');
        }
        historicoGrupos.innerHTML += `<p>${this._allTeams[i].nome}  ${this._allTeams[i]._golsFeitosLastPartida}  X ${this._allTeams[x]._golsFeitosLastPartida}  ${this._allTeams[x].nome}</p>`;
    }
    passaTimesDeFase() {
        console.log('Times que passaram de fase:');
        this._timesQuePassaram = new Array;
        let z = 0;
        var grupo;
        for (let index = 0; index < 32; index += 4) {
            grupo = new Array;
            grupo.push(this._allTeams[index]);
            grupo.push(this._allTeams[index + 1]);
            grupo.push(this._allTeams[index + 2]);
            grupo.push(this._allTeams[index + 3]);
            this.verificaColocacao(grupo);
            console.log('Campeao do grupo ' + z + ': ' + grupo[0].nome);
            console.log('Vice do grupo ' + z + ': ' + grupo[1].nome);
            //adicionando a lista dos times que vão para o mata mata
            this._timesQuePassaram.push(grupo[0]);
            this._timesQuePassaram.push(grupo[1]);
            //Lista da classificação de todos os times
            this._timesColocacao.push(grupo[0]);
            this._timesColocacao.push(grupo[1]);
            this._timesColocacao.push(grupo[2]);
            this._timesColocacao.push(grupo[3]);
            // this.proximaFase();
            // console.log(grupo[z]+ ' ' + grupo[z+1]);
            z += 1;
        }
    }
    //Recebe o array de times de um grupo e organiza da maior pontuação para menor
    verificaColocacao(grupo) {
        grupo = grupo.sort((x, y) => y.pontuacao - x.pontuacao);
        // verificando se não há empates na pontuação
        //Se possuir ele coloca o time com maior saldo de gols na frente
        for (let index = 0; index < 3; index++) {
            if (grupo[index].pontuacao == grupo[index + 1].pontuacao) {
                if (grupo[index].saldoGols > grupo[index + 1].saldoGols) {
                    break;
                }
                else if (grupo[index + 1].saldoGols > grupo[index].saldoGols) {
                    var maior = grupo[index + 1];
                    grupo[index + 1] = grupo[index];
                    grupo[index] = maior;
                }
            }
        }
    }
    //Retorna somente os times que passaram para o mata mata, sendo o campeão e o vice de cada grupo
    proximaFase() {
        let confrontos = new Array;
        let z = 0;
        //teremos 2 loops,1 pro lado esquerdo e outro pro lado direito da tabela
        //Ele já organiza que o time campeão A vai jogar contra o vice do grupo B e assim por diante
        for (let index = 0; index < this._timesQuePassaram.length; index++) {
            // console.log('Equipe '+index+ ' '+ this._timesQuePassaram[index].nome);
            confrontos.push(this._timesQuePassaram[index]);
            z += 1;
            index += 3;
            confrontos.push(this._timesQuePassaram[index]);
            z += 1;
        }
        //loop lado direito da tabela
        for (let index = 2; index < this._timesQuePassaram.length; index++) {
            // console.log('Equipe '+index+ ' '+ this._timesQuePassaram[index].nome);
            confrontos.push(this._timesQuePassaram[index]);
            confrontos.push(this._timesQuePassaram[index - 1]);
            z += 1;
            z += 1;
            index += 3;
        }
        console.log("Partidas do mata mata");
        //teste se deu certo
        for (let index = 0; index < confrontos.length; index += 2) {
            // console.log('Equipe '+index+ ' '+ this._timesQuePassaram[index].nome);
            console.log(confrontos[index].nome + ' x ' + confrontos[index + 1].nome);
        }
        this.mostraTodosTimes();
        this.mostraProximaFase(confrontos);
        return confrontos;
    }
    //Escreve os confrontos na tabela das Oitavas
    //Primeira metade no lado esquerdo e segunda metade no lado direito da tabela
    mostraProximaFase(confrontos) {
        for (let index = 0; index < confrontos.length; index++) {
            let proxima;
            if (index < confrontos.length / 2) {
                proxima = document.querySelector('.OitavasLeft');
            }
            else {
                proxima = document.querySelector('.OitavasRight');
            }
            if ((index % 2) == 0) {
                proxima.innerHTML += `<p> ${confrontos[index].nome}</p>`;
            }
            else {
                proxima.innerHTML += `<p class="SegundoTimeOitavas"> ${confrontos[index].nome}</p>`;
            }
        }
    }
}
