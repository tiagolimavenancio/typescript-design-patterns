import DadosObserver from "../abstract/DadosObserver";
import DadosSubject from "./DadosSubject";

export default class PorcentoObserver extends DadosObserver {
  constructor(dados: DadosSubject) {
    super(dados);
  }

  public update(): void {
    const somaDosValores: number =
      this.dados.getState().valorA +
      this.dados.getState().valorB +
      this.dados.getState().valorC;

    const porcentagemA = `${(this.dados.getState().valorA / somaDosValores).toFixed(2)}`;
    const porcentagemB = `${(this.dados.getState().valorB / somaDosValores).toFixed(2)}`;
    const porcentagemC = `${(this.dados.getState().valorC / somaDosValores).toFixed(2)}`;

    console.log(
      "Porcentagem:\nValor A: " +
        porcentagemA +
        "%\nValor B: " +
        porcentagemB +
        "%\nValor C: " +
        porcentagemC +
        "%"
    );
  }
}
