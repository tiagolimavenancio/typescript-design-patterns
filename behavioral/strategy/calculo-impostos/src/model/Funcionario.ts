import CalculaImposto from '../interfaces/CalculaImposto';
import CalculoImpostoQuinzeOuDez from '../classes/CalculoImpostoQuinzeOuDez';
import CalculoImpostoVinteOuQuinze from '../classes/CalculoImpostoVinteOuQuinze';

export default class Funcionario {
    public static DESENVOLVEDOR: number = 1;
    public static GERENTE: number = 2;
    public static DBA: number = 3;

    protected salarioBase: number;
    protected cargo: number;
    protected estrategiaDeCalculo: CalculaImposto;

    constructor(cargo: number, salarioBase: number) {
        this.salarioBase = salarioBase;
        switch (cargo) {
            case Funcionario.DESENVOLVEDOR:
                this.estrategiaDeCalculo = new CalculoImpostoQuinzeOuDez();
                this.cargo = Funcionario.DESENVOLVEDOR;
                break;
            case Funcionario.DBA:
                this.estrategiaDeCalculo = new CalculoImpostoQuinzeOuDez();
                this.cargo = Funcionario.DBA;
                break;
            case Funcionario.GERENTE:
                this.estrategiaDeCalculo = new CalculoImpostoVinteOuQuinze();
                this.cargo = Funcionario.GERENTE;
                break;
            default:
                break;
        }
    }

    public calcularSalarioComImposto(): number {
        return this.estrategiaDeCalculo.calculaSalarioComImposto(this);
    }

    public getSalarioBase(): number {
        return this.salarioBase;
    }
}