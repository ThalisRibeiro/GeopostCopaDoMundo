"use strict";
class Selecao {
    constructor(nome = "", token = "") {
        this._nome = nome;
        this._vitorias = 0;
        this._pontuacao = 0;
        this._empates = 0;
        this._derrotas = 0;
        this._golsFeitos = 0;
        this._golsFeitosLastPartida = 0;
        this._golsRecebidosLastPartida = 0;
        this._golsRecebidos = 0;
        this._golsPenalti = 0;
        this._passouDeFase = false;
        this._token = token;
    }
    fimDeJogo(pontos, golsFeito, golsSofrido, golsPenalti = 0) {
        switch (pontos) {
            case 3:
                this.vitorias = 1;
                this._passouDeFase = true;
                break;
            case 1:
                this.empates = 1;
                break;
            case 0:
                this.derrotas = 1;
                this._passouDeFase = false;
                break;
            default:
                break;
        }
        this.golsFeitos = golsFeito;
        this.golsRecebidos = golsSofrido;
        this.pontuacao = pontos;
        this._golsFeitosLastPartida = golsFeito;
        this._golsRecebidosLastPartida = golsSofrido;
        this._golsPenalti = golsPenalti;
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
