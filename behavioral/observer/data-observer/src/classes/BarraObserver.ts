import DadosObserver from "../abstract/DadosObserver";
import DadosSubject from "./DadosSubject";

export default class BarraObserver extends DadosObserver {
    
    constructor(dados: DadosSubject) {
        super(dados);
    }

    public update(): void {
        let barraA: string = "";
        let barraB: string = "";
        let barraC: string = "";

		for (let i = 0; i < this.dados.getState().valorA; i++) {
			barraA += '=';
		}

		for (let i = 0; i < this.dados.getState().valorB; i++) {
			barraB += '=';
		}

		for (let i = 0; i < this.dados.getState().valorC; i++) {
			barraC += '=';
		}

		console.log("Barras:\nValor A: " + barraA + "\nValor B: " + barraB + "\nValor C: " + barraC);
    }
}