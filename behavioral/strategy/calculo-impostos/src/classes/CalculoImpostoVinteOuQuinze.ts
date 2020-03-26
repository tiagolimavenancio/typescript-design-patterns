import CalculaImposto from "../interfaces/CalculaImposto";
import Funcionario from "../model/Funcionario";

export default class CalculoImpostoVinteOuQuinze implements CalculaImposto {
    calculaSalarioComImposto(umFuncionario: Funcionario): number {
        if(umFuncionario.getSalarioBase() > 3500) {
            return umFuncionario.getSalarioBase() * 0.8;
        }

        return umFuncionario.getSalarioBase() * 0.85;
    }
}