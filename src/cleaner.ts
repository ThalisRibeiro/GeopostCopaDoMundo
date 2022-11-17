class Cleaner {
        //Os apagadores sobrescrevem os dados que estavam na html pós jogo para dados zerados, assim quando novos dados forem colocados não de conflito no html
        public apagaProgresso(){
            this.clearOitavas();
            this.clearQuartas();
            this.clearSemi();
            this.clearFinais();
            
        }
    public clearFinais() {
        let dadosTabela = document.querySelector('.Finais') as HTMLVideoElement;
        dadosTabela.innerHTML = "";
        return dadosTabela;
    }

    public clearSemi() {
        let dadosTabela = document.querySelector('.SemiLeft') as HTMLVideoElement;
        dadosTabela.innerHTML = "";
        dadosTabela = document.querySelector('.SemiRight') as HTMLVideoElement;
        dadosTabela.innerHTML = "";
        return dadosTabela;
    }

    public clearQuartas() {
        let dadosTabela = document.querySelector('.QuartasLeft') as HTMLVideoElement;
        dadosTabela.innerHTML = "";
        dadosTabela = document.querySelector('.QuartasRight') as HTMLVideoElement;
        dadosTabela.innerHTML = "";
        return dadosTabela;
    }

    public clearOitavas() {
        let dadosTabela = document.querySelector('.OitavasLeft') as HTMLVideoElement;
        dadosTabela.innerHTML = "";
        dadosTabela = document.querySelector('.OitavasRight') as HTMLVideoElement;
        dadosTabela.innerHTML = "";
        return dadosTabela;
    }

        public apagaHistorico(){
            console.log("Apagando historico?")
            let historicoGrupos = document.querySelector('.HistoricoGrupos')as HTMLVideoElement;
            historicoGrupos.innerHTML="<h2> Fase de Grupos</h2>";
            historicoGrupos = document.querySelector('.HistoricoGrupos2')as HTMLVideoElement;
            historicoGrupos.innerHTML="<h2> Fase de Grupos </h2>";
            historicoGrupos = document.querySelector('.HistoricoMataMataOit')as HTMLVideoElement;
            historicoGrupos.innerHTML="<h2> Oitavas</h2>";
            historicoGrupos = document.querySelector('.HistoricoMataMataQua')as HTMLVideoElement;
            historicoGrupos.innerHTML="<h2> Quartas</h2>";
            historicoGrupos = document.querySelector('.HistoricoMataMataSemi')as HTMLVideoElement;
            historicoGrupos.innerHTML="<h2> Semi finais</h2>";
            historicoGrupos = document.querySelector('.HistoricoMataMataFin')as HTMLVideoElement;
            historicoGrupos.innerHTML="<h2> Final</h2>";
        }
        public apagaTabela(){
            const divGrupos = document.querySelector('.FaseDeGrupos')as HTMLVideoElement; 
                divGrupos.innerHTML=`<h2>FASE DE GRUPOS</h2>`;
        }
}