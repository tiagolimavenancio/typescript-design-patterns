import DadosObserver from "../abstract/DadosObserver";
import DadosSubject from "./DadosSubject";

export default class TabelaObserver extends DadosObserver {

    constructor(dados: DadosSubject) {
        super(dados);
    }

    public update(): void {
        console.log("Tabela:\nValor A: " + this.dados.getState().valorA
				+ "\nValor B: " + this.dados.getState().valorB + "\nValor C: "
				+ this.dados.getState().valorC);
    }
    
}