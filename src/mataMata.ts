class MataMata {
    constructor(fase:string) {
        this._fase=fase;
    }

    private _allTeams:Array<Selecao> = new Array<Selecao>;
    private _fase:string;
    //sempre que receber novos times, nao tera ligacao com as fases anteriores
    public set allTeams(selecoes:Array<Selecao>){
        for(let i = 0;i<selecoes.length;i++){
            let nome = selecoes[i].nome;
            let token = selecoes[i].nome;
            let vitorias = selecoes[i].vitorias;
            let pontos = selecoes[i].pontuacao;
            let empates = selecoes[i].empates;
            let derrotas = selecoes[i].derrotas;
            let golsFeito = selecoes[i].golsFeitos;
            let golsRecebidos = selecoes[i].golsRecebidos;
            let time = new Selecao(nome,token,vitorias,pontos,empates,derrotas,golsFeito,golsRecebidos);
            this._allTeams.push(time);
        }
    }
    public get allTeams(){
        return this._allTeams;
    }
    jogos(){
        console.log('entramos nas partidas das '+this._fase);        
        // const historicoJogos = document.querySelector('.HistoricoDeJogos')as HTMLVideoElement;
        // historicoJogos.innerHTML+=`<div class=${this._fase} id=${this._fase}> </div>`; 
        var partidas:Partida = new Partida();
        for (let index = 0; index < this._allTeams.length; index+=2) 
        {
            partidas.RodaPartidaMata(this._allTeams[index],this._allTeams[index+1]);   
            console.log(this._allTeams[index].nome+' gols = '+this._allTeams[index]._golsFeitosLastPartida + ' '+this._allTeams[index+1].nome+' gols = '+this._allTeams[index+1]._golsFeitosLastPartida);      
            this.MostraHistoricoPartida(index,index+1) 
        }
        
        // this.mostraSaldoGols();
        // this.passaTimesDeFase();
    }
    proximaFase():Array<Selecao>{
        console.log('Para proxima fase: ');
        
        var ganharam: Array<Selecao> = new Array<Selecao>;
        for (let index = 0; index < this._allTeams.length; index++) {
            //console.log(this._allTeams[index].nome+' passou de fase: '+ this._allTeams[index].passouDeFase);
            
            if (this._allTeams[index].passouDeFase == true)
            {
                ganharam.push(this._allTeams[index]);   
                console.log(this._allTeams[index]);
            }
        }
        return ganharam;
    }
    MostraHistoricoPartida(i:number, x:number){
        let historicoFase;
        switch (this._fase) {
            case 'oitavas': historicoFase = document.querySelector(".HistoricoMataMataOit")as HTMLVideoElement; 
                break;
                
            case 'quartas':historicoFase = document.querySelector(".HistoricoMataMataQua")as HTMLVideoElement; 
                break;
            case 'semi':historicoFase = document.querySelector(".HistoricoMataMataSemi")as HTMLVideoElement; 
                break;
                case 'finais':historicoFase = document.querySelector(".HistoricoMataMataFin")as HTMLVideoElement; 
                break;
        
            default: historicoFase = document.querySelector(".HistoricoMataMataFin")as HTMLVideoElement; 
                break;
        }
        
        historicoFase.innerHTML+=`<p>${this._allTeams[i].nome}  ${this._allTeams[i]._golsFeitosLastPartida}  X ${this._allTeams[x]._golsFeitosLastPartida}  ${this._allTeams[x].nome}</p>`
    }
}