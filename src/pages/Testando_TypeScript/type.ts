class Default {
    texto: any;
    numero: number;
    qualquer: any;
    booleano: boolean;
    array: Array<any>;
    //array: any[];
    //array: Array;

    constructor() {
        this.method();
        this.array = [
            {
                teste: 'teste'
            }
        ];
    }

    method (){
        this.numero = 10;
        this.texto = `Praticando typeScript ${this.numero}`;
        return alert(this.texto);
    }
}