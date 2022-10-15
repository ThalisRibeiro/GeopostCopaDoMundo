"use strict";
class Selecao {
    constructor(nome = "", token = "", vitorias = 0, pontuacao = 0, empates = 0, derrotas = 0, gFeitos = 0, gRecebidos = 0) {
        this._nome = nome;
        this._vitorias = vitorias;
        this._pontuacao = pontuacao;
        this._empates = empates;
        this._derrotas = derrotas;
        this._golsFeitos = gFeitos;
        this._golsFeitosLastPartida = 0;
        this._golsRecebidosLastPartida = 0;
        this._golsRecebidos = gRecebidos;
        this._golsPenalti = 0;
        this._passouDeFase = false;
        this._token = token;
        this._saldoGols = this.golsFeitos - this.golsRecebidos;
    }
    //Método para receber informação de jogos da fase de grupos, ele soma as pontuações para que no final seja escolhido os times com maiores pontos
    fimDeJogo(pontos, golsFeito, golsSofrido) {
        switch (pontos) {
            case 3:
                this.vitorias = 1;
                break;
            case 1:
                this.empates = 1;
                break;
            case 0:
                this.derrotas = 1;
                break;
            default:
                break;
        }
        this.golsFeitos = golsFeito;
        this.golsRecebidos = golsSofrido;
        this.pontuacao = pontos;
        this._golsFeitosLastPartida = golsFeito;
        this._golsRecebidosLastPartida = golsSofrido;
        this.setSaldoGols();
    }
    //Método para receber informação de jogos do mata mata, no lugar da pontuação recebe se ele passou ou não de fase, além disso recebe quantos gols de penalti fez
    fimDeJogoMata(passou, golsFeito, golsSofrido, golsPenalti = 0) {
        this.passouDeFase = passou;
        if (passou == true)
            this.vitorias = 1;
        else
            this.derrotas = 1;
        this.golsFeitos = golsFeito;
        this.golsRecebidos = golsSofrido;
        this._golsFeitosLastPartida = golsFeito;
        this._golsRecebidosLastPartida = golsSofrido;
        this._golsPenalti = golsPenalti;
    }
    setSaldoGols() {
        this._saldoGols = this.golsFeitos - this.golsRecebidos;
    }
    get saldoGols() {
        return this._saldoGols;
    }
    get golsPenalti() {
        return this._golsPenalti;
    }
    get nome() {
        return this._nome;
    }
    get token() {
        return this._token;
    }
    get pontuacao() {
        return this._pontuacao;
    }
    set pontuacao(value) {
        this._pontuacao += value;
    }
    get vitorias() {
        return this._vitorias;
    }
    set vitorias(value) {
        this._vitorias += value;
    }
    get empates() {
        return this._empates;
    }
    set empates(value) {
        this._empates += value;
    }
    get derrotas() {
        return this._derrotas;
    }
    set derrotas(value) {
        this._derrotas += value;
    }
    get golsFeitos() {
        return this._golsFeitos;
    }
    set golsFeitos(value) {
        this._golsFeitos += value;
    }
    get golsRecebidos() {
        return this._golsRecebidos;
    }
    set golsRecebidos(value) {
        this._golsRecebidos += value;
    }
    get passouDeFase() {
        return this._passouDeFase;
    }
    set passouDeFase(value) {
        this._passouDeFase = value;
    }
}
