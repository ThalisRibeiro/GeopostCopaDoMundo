class Selecao{
    constructor(nome:string = "",token:string = ""){
        this._nome = nome;
        this._vitorias=0;
        this._pontuacao=0;
        this._empates=0;
        this._derrotas=0;
        this._golsFeitos=0;
        this._golsRecebidos=0;
        this._passouDeFase=false;
        this._token=token;
    }
    private _nome: string;
    private _token:string;
    private _pontuacao: number;
    private _vitorias: number;
    private _empates: number;    
    private _derrotas: number;    
    private _golsFeitos: number;    
    private _golsRecebidos: number;    
    private _passouDeFase: boolean;


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
        this.golsFeitos=golsFeito; this.golsRecebidos=golsSofrido; this.pontuacao=pontos;
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