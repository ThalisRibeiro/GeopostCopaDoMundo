class MataMata {
    constructor() {
    }

    public _allTeams:Array<Selecao> = new Array<Selecao>;
    jogos(){
        console.log('entramos nas partidas das oitavas');
        
        var partidas:Partida = new Partida();
        for (let index = 0; index < this._allTeams.length; index+=2) 
        {
            partidas.RodaPartidaMata(this._allTeams[index],this._allTeams[index+1]);   
            console.log(this._allTeams[index].nome+' gols = '+this._allTeams[index]._golsFeitosLastPartida + ' '+this._allTeams[index+1].nome+' gols = '+this._allTeams[index+1]._golsFeitosLastPartida);       
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
}