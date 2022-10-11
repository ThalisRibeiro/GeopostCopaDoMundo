class FaseDeGrupos {
    constructor() {
    }
     _allTeams:Array<Selecao>=[];
     _timesQuePassaram:Array<Selecao>=[];
    
    salvaTimes(nomes:string[], tokens:string[]){
        var time:Selecao= new Selecao;
        console.log("Chegamos em SalvaTimes");
        
        for (let index = 0; index < nomes.length; index++) {
            console.log("Nome "+index+": ");
            
            time= new Selecao(nomes[index],tokens[index]);
            console.log(time.nome);
            
            this._allTeams.push(time);
        }
    }

    jogos(){
        var partidas:Partida = new Partida();
        for (let index = 0; index < this._allTeams.length; index+=4) 
        {
            for(let i=index;i<index+3;i++)
            {
                for (let x = i+1; x < index+4; x++) 
                {
                    partidas.RodaPartida(this._allTeams[i],this._allTeams[x]);   
                     console.log(this._allTeams[i].nome+' gols = '+this._allTeams[i]._golsFeitosLastPartida + ' '+this._allTeams[x].nome+' gols = '+this._allTeams[x]._golsFeitosLastPartida);       
                }
            }            
        }
        this.mostraSaldoGols()
    }
    mostraSaldoGols(){
        for (let index = 0; index < this._allTeams.length; index++)
        {
            console.log("Pontos do "+ this._allTeams[index].nome+": "+(this._allTeams[index].pontuacao));
            console.log("Saldo de gols do "+ this._allTeams[index].nome+": "+(this._allTeams[index].golsFeitos -this._allTeams[index].golsRecebidos));
        } 

    }
    mostraTodosTimes(){
        console.log("Times na fase de grupo: ");
        
        for(let index = 0; index<32;index++){         
            console.log('Nome '+index+': '+this._allTeams[index].nome);
            console.log('Token '+index+': '+this._allTeams[index].token);
        }
    }

    passaTimesDeFase()
    {
        // let z:number=0;
        for (let index = 0; index < this._allTeams.length; index+4) {
            var grupo:Array<Selecao> = new Array;
            grupo[0]=this._allTeams[index];
            grupo[1]=this._allTeams[index+1];
            grupo[2]=this._allTeams[index+2];
            grupo[3]=this._allTeams[index+3];
            this.verificaColocacao(grupo);
            //adicionando a lista dos times que vão para o mata mata
            this._timesQuePassaram.push(grupo[0])
            this._timesQuePassaram.push(grupo[1])
            // this.proximaFase();
        }
    }

    verificaColocacao(grupo:Array<Selecao>)
    {
        grupo = grupo.sort((x)=>x.pontuacao);
        //verificando se não há empates na pontuação
        for (let index = 0; index < grupo.length-1; index++) 
        {
            if (grupo[index].pontuacao == grupo[index+1].pontuacao)
            {
                if(grupo[index].vitorias>grupo[index+1].vitorias){
                    break;
                }    
                else if (grupo[index+1].vitorias>grupo[index].vitorias) {
                    var maior = grupo[index+1];
                    grupo[index+1] = grupo[index];
                    grupo[index] = maior;
                }
            }            
        }

    }
    proximaFase()
    {

    }
}

