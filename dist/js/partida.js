"use strict";
class Partida {
    constructor() { }
    RodaPartida(timeA, timeB) {
        var gols = [2];
        //Decide um número de gols aleatórios para cada time
        gols[0] = Math.floor(Math.random() * 4);
        gols[1] = Math.floor(Math.random() * 4);
        //Verifica quem ganhou ou se deu empate e passa os dados do jogo de acordo
        if (gols[0] > gols[1]) {
            timeA.fimDeJogo(3, gols[0], gols[1]);
            timeB.fimDeJogo(0, gols[1], gols[0]);
        }
        else if (gols[0] < gols[1]) {
            timeA.fimDeJogo(0, gols[0], gols[1]);
            timeB.fimDeJogo(3, gols[1], gols[0]);
        }
        else if (gols[0] == gols[1]) {
            timeA.fimDeJogo(1, gols[0], gols[1]);
            timeB.fimDeJogo(1, gols[1], gols[0]);
        }
    }
    //Decide as partidas do mata mata
    //Essa não envia o número de pontos, mas sim um boolean pro time que ganhou que ele passou de fase
    RodaPartidaMata(timeA, timeB) {
        var gols = [2];
        gols[0] = Math.floor(Math.random() * 4);
        gols[1] = Math.floor(Math.random() * 4);
        if (gols[0] > gols[1]) {
            timeA.fimDeJogoMata(true, gols[0], gols[1]);
            timeB.fimDeJogoMata(false, gols[1], gols[0]);
        }
        else if (gols[0] < gols[1]) {
            timeA.fimDeJogoMata(false, gols[0], gols[1]);
            timeB.fimDeJogoMata(true, gols[1], gols[0]);
        }
        //Como um time tem que ganhar, caso dê empate, a a partida é decidida nos penaltis
        else if (gols[0] == gols[1]) {
            //Penalti   
            var golsP = [2];
            golsP[0] = Math.floor(Math.random() * 10);
            golsP[1] = Math.floor(Math.random() * 10);
            if (golsP[0] < golsP[1]) {
                timeA.fimDeJogoMata(false, gols[0], gols[1], golsP[0]);
                timeB.fimDeJogoMata(true, gols[1], gols[0], golsP[1]);
            }
            else {
                timeA.fimDeJogoMata(true, gols[0], gols[1], golsP[0]);
                timeB.fimDeJogoMata(false, gols[1], gols[0], golsP[1]);
            }
        }
    }
}
