import CalculaImposto from "../interfaces/CalculaImposto";
import Funcionario from "../model/Funcionario";

export default class CalculoImpostoQuinzeOuDez implements CalculaImposto {
    calculaSalarioComImposto(umFuncionario: Funcionario): number {
        if(umFuncionario.getSalarioBase() > 2000) {
            return umFuncionario.getSalarioBase() * 0.85;
        }

        return umFuncionario.getSalarioBase() * 0.9;
    }
}