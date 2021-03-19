import Funcionario from "../model/Funcionario";

export default interface CalculaImposto {
    calculaSalarioComImposto(umFuncionario: Funcionario): number;
}