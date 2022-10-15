class Selecao{
    constructor(nome:string = "",token:string = "",vitorias:number=0,pontuacao:number=0,empates:number=0,derrotas:number=0,gFeitos:number=0,gRecebidos:number=0){
        this._nome = nome;
        this._vitorias=vitorias;
        this._pontuacao=pontuacao;
        this._empates=empates;
        this._derrotas=derrotas;
        this._golsFeitos=gFeitos;
        this._golsFeitosLastPartida=0;
        this._golsRecebidosLastPartida=0;
        this._golsRecebidos=gRecebidos;
        this._golsPenalti=0;
        this._passouDeFase=false;
        this._token=token;
        this._saldoGols = this.golsFeitos-this.golsRecebidos;
    }
    private _nome: string;
    private _token:string;
    private _pontuacao: number;
    private _vitorias: number;
    private _empates: number;    
    private _derrotas: number;    
    private _golsFeitos: number;    
    public _golsFeitosLastPartida: number;
    private _golsRecebidos: number;    
    public _golsRecebidosLastPartida: number;    
    private _passouDeFase: boolean;
    private _golsPenalti: number;
    private _saldoGols: number;
    //Método para receber informação de jogos da fase de grupos, ele soma as pontuações para que no final seja escolhido os times com maiores pontos
    fimDeJogo(pontos:number, golsFeito:number, golsSofrido:number){
        switch (pontos) {
            case 3: this.vitorias=1;
                break;
            case 1: this.empates=1;
                break;
            case 0: this.derrotas=1;
                break;
            default:
                break;
        }
        this.golsFeitos=golsFeito; this.golsRecebidos=golsSofrido; this.pontuacao=pontos; this._golsFeitosLastPartida=golsFeito; this._golsRecebidosLastPartida=golsSofrido;
        this.setSaldoGols()
    }
    //Método para receber informação de jogos do mata mata, no lugar da pontuação recebe se ele passou ou não de fase, além disso recebe quantos gols de penalti fez
    fimDeJogoMata(passou:boolean, golsFeito:number, golsSofrido:number, golsPenalti:number=0){
        this.passouDeFase=passou;
        if(passou==true)
            this.vitorias=1;
        
        else
            this.derrotas=1;

        this.golsFeitos=golsFeito; this.golsRecebidos=golsSofrido; this._golsFeitosLastPartida=golsFeito; this._golsRecebidosLastPartida=golsSofrido; this._golsPenalti = golsPenalti;
    }
    private setSaldoGols(){
        this._saldoGols=this.golsFeitos-this.golsRecebidos;
    }
    public get saldoGols(){
        return this._saldoGols;
    }
    public get golsPenalti():number{
        return this._golsPenalti;
    }

    public get nome():string {
        return this._nome;
    }
    public get token():string{
        return this._token;
    }
    public get pontuacao(): number {
        return this._pontuacao;
    }
    public set pontuacao(value: number){
        this._pontuacao+=value;
    }

    public get vitorias(): number {
        return this._vitorias;
    }
    private set vitorias(value: number) {
        this._vitorias += value;
    }

    public get empates(): number {
        return this._empates;
    }
    private set empates(value: number) {
        this._empates += value;
    }

    public get derrotas(): number {
        return this._derrotas;
    }
    private set derrotas(value: number) {
        this._derrotas += value;
    }

    public get golsFeitos(): number {
        return this._golsFeitos;
    }
    public set golsFeitos(value: number) {
        this._golsFeitos += value;
    }

    public get golsRecebidos(): number {
        return this._golsRecebidos;
    }
    public set golsRecebidos(value: number) {
        this._golsRecebidos += value;
    }
    public get passouDeFase(): boolean {
        return this._passouDeFase;
    }
    public set passouDeFase(value: boolean) {
        this._passouDeFase = value;
    }
    
}