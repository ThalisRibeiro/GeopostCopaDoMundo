"use strict";
class FaseDeGrupos {
    constructor() {
        this._allTeams = [];
        this._timesQuePassaram = [];
        this._timesColocacao = [];
        this._alfabeto = [];
        this._alfabeto.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H');
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
        // console.log("Times na fase de grupo: ");
        // for(let index = 0; index<32;index++){         
        //     console.log('Nome '+index+': '+this._allTeams[index].nome);
        //     console.log('Token '+index+': '+this._allTeams[index].token);
        // }
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
                        <td>${this._timesColocacao[index].nome}</td> 
                        <td>${this._timesColocacao[index].vitorias}</td>
                        <td>${this._timesColocacao[index].saldoGols}</td>
                        <td>${this._timesColocacao[index].pontuacao}</td>   
                    </tr>
                    <tr>
                        <td>${this._timesColocacao[index + 1].nome}</td> 
                        <td>${this._timesColocacao[index + 1].vitorias}</td>
                        <td>${this._timesColocacao[index + 1].saldoGols}</td>
                        <td>${this._timesColocacao[index + 1].pontuacao}</td>   
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
            console.log('Campeao do grupo ' + z + ': ' + grupo[0].nome);
            console.log('Vice do grupo ' + z + ': ' + grupo[1].nome);
            //adicionando a lista dos times que vão para o mata mata
            this._timesQuePassaram.push(grupo[0]);
            this._timesQuePassaram.push(grupo[1]);
            this._timesColocacao.push(grupo[0]);
            this._timesColocacao.push(grupo[1]);
            this._timesColocacao.push(grupo[2]);
            this._timesColocacao.push(grupo[3]);
            // this.proximaFase();
            // console.log(grupo[z]+ ' ' + grupo[z+1]);
            z += 1;
        }
    }
    verificaColocacao(grupo) {
        // console.log("Entramos no Verifica Colocacao\nGrupo pre sorted: "+ grupo[0].nome+ " Pontos: "+ grupo[0].pontuacao+" " + grupo[1].nome+" Pontos: "+ grupo[1].pontuacao+" "+ grupo[2].nome+ " Pontos: "+ grupo[2].pontuacao+" "+ grupo[3].nome+ " Pontos: "+ grupo[3].pontuacao+" ")
        grupo = grupo.sort((x, y) => y.pontuacao - x.pontuacao);
        // console.log("Grupo pos sorted: "+ grupo[0].nome+ " Pontos: "+ grupo[0].pontuacao+" " + grupo[1].nome+" Pontos: "+ grupo[1].pontuacao+" "+ grupo[2].nome+ " Pontos: "+ grupo[2].pontuacao+" "+ grupo[3].nome+ " Pontos: "+ grupo[3].pontuacao+" ")
        // // verificando se não há empates na pontuação
        // for (let index = 0; index < 3; index++) 
        // {
        //     if (grupo[index].pontuacao == grupo[index+1].pontuacao)
        //     {
        //         if(grupo[index].saldoGols>grupo[index+1].saldoGols){
        //             break;
        //         }    
        //         else if (grupo[index+1].saldoGols>grupo[index].saldoGols) {
        //             var maior = grupo[index+1];
        //             grupo[index+1] = grupo[index];
        //             grupo[index] = maior;
        //         }
        //     }            
        // }
    }
    proximaFase() {
        let confrontos = new Array;
        console.log('para proxima fase');
        let z = 0;
        //teremos 2 loops,1 pro lado esquerdo e outro pro lado direito da tabela
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
        return confrontos;
    }
}
