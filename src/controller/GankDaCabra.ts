export class GankDaCabra{
    constructor(){}
    berraComONome(nome:string) {
        return new Cabra(`Béééééééééééééé ${nome}`)
    }
}

class Cabra{
    constructor(berro:string){
        this.berro = berro;
    }
    berro: string;
}
