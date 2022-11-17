"use strict";
class Cleaner {
    //Os apagadores sobrescrevem os dados que estavam na html pós jogo para dados zerados, assim quando novos dados forem colocados não de conflito no html
    apagaProgresso() {
        this.clearOitavas();
        this.clearQuartas();
        this.clearSemi();
        this.clearFinais();
    }
    clearFinais() {
        let dadosTabela = document.querySelector('.Finais');
        dadosTabela.innerHTML = "";
        return dadosTabela;
    }
    clearSemi() {
        let dadosTabela = document.querySelector('.SemiLeft');
        dadosTabela.innerHTML = "";
        dadosTabela = document.querySelector('.SemiRight');
        dadosTabela.innerHTML = "";
        return dadosTabela;
    }
    clearQuartas() {
        let dadosTabela = document.querySelector('.QuartasLeft');
        dadosTabela.innerHTML = "";
        dadosTabela = document.querySelector('.QuartasRight');
        dadosTabela.innerHTML = "";
        return dadosTabela;
    }
    clearOitavas() {
        let dadosTabela = document.querySelector('.OitavasLeft');
        dadosTabela.innerHTML = "";
        dadosTabela = document.querySelector('.OitavasRight');
        dadosTabela.innerHTML = "";
        return dadosTabela;
    }
    apagaHistorico() {
        console.log("Apagando historico?");
        let historicoGrupos = document.querySelector('.HistoricoGrupos');
        historicoGrupos.innerHTML = "<h2> Fase de Grupos</h2>";
        historicoGrupos = document.querySelector('.HistoricoGrupos2');
        historicoGrupos.innerHTML = "<h2> Fase de Grupos </h2>";
        historicoGrupos = document.querySelector('.HistoricoMataMataOit');
        historicoGrupos.innerHTML = "<h2> Oitavas</h2>";
        historicoGrupos = document.querySelector('.HistoricoMataMataQua');
        historicoGrupos.innerHTML = "<h2> Quartas</h2>";
        historicoGrupos = document.querySelector('.HistoricoMataMataSemi');
        historicoGrupos.innerHTML = "<h2> Semi finais</h2>";
        historicoGrupos = document.querySelector('.HistoricoMataMataFin');
        historicoGrupos.innerHTML = "<h2> Final</h2>";
    }
    apagaTabela() {
        const divGrupos = document.querySelector('.FaseDeGrupos');
        divGrupos.innerHTML = `<h2>FASE DE GRUPOS</h2>`;
    }
}
