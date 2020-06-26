export default class Compra {
  private static id: number = 0;
  private idNotaFiscal: number = 0;
  private nomeDaLoja: string;
  private valorTotal: number;

  constructor(nomeDaLoja: string) {
    this.nomeDaLoja = nomeDaLoja;
    this.idNotaFiscal = Compra.id++;
  }

  public setValor(valor: number): void {
    this.valorTotal = valor;
  }

  public getInfoNota(): string {
    return `Nota fiscal n: ${this.idNotaFiscal}. Loja: ${this.nomeDaLoja}. Valor: ${this.valorTotal}`;
  }
}
