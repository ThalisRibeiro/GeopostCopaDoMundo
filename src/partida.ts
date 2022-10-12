class Partida {
    constructor(){}
    RodaPartida(timeA:Selecao,timeB:Selecao){
        var gols:Array<number> = [2];
        gols[0]= Math.floor(Math.random() * 4);
        gols[1]= Math.floor(Math.random() * 4);
        
        
        // timeA.golsFeitos=gols[0];
        // timeA.golsRecebidos=gols[1];

        
        // timeB.golsFeitos=gols[1];
        // timeB.golsRecebidos=gols[0];
        
        if (gols[0]>gols[1]) 
        {
            timeA.fimDeJogo(3,gols[0],gols[1])
            timeB.fimDeJogo(0,gols[1],gols[0])
        }
        else if(gols[0]<gols[1])
        {
            timeA.fimDeJogo(0,gols[0],gols[1])
            timeB.fimDeJogo(3,gols[1],gols[0])
        }
        else if (gols[0]==gols[1])
        {
            timeA.fimDeJogo(1,gols[0],gols[1])
            timeB.fimDeJogo(1,gols[1],gols[0])
        }

    }
    RodaPartidaMata(timeA:Selecao,timeB:Selecao){
        var gols:Array<number> = [2];
        gols[0]= Math.floor(Math.random() * 4);
        gols[1]= Math.floor(Math.random() * 4);
        
        if (gols[0]>gols[1]) 
        {
            timeA.fimDeJogoMata(3,gols[0],gols[1])
            timeB.fimDeJogoMata(0,gols[1],gols[0])
        }
        else if(gols[0]<gols[1])
        {
            timeA.fimDeJogoMata(0,gols[0],gols[1])
            timeB.fimDeJogoMata(3,gols[1],gols[0])
        }
        else if (gols[0]==gols[1])
        {
            //Penalti   
            var golsP:Array<number> = [2];
            golsP[0]= Math.floor(Math.random() * 10);
            golsP[1]= Math.floor(Math.random() * 10);
            
            if(golsP[0]<golsP[1])
            {
                timeA.fimDeJogoMata(0,gols[0],gols[1],golsP[0])
                timeB.fimDeJogoMata(3,gols[1],gols[0],golsP[1])
            }
            else   
            {
                timeA.fimDeJogoMata(3,gols[0],gols[1],golsP[0])
                timeB.fimDeJogoMata(0,gols[1],gols[0],golsP[1])
            }
        }

    }
}