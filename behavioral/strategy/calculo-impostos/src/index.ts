import Funcionario from "../model/Funcionario";

function start() {
    const funcionario1 = new Funcionario(Funcionario.DESENVOLVEDOR, 2100);
    console.log(funcionario1.calcularSalarioComImposto());

    const funcionario2 = new Funcionario(Funcionario.DBA, 3000);
    console.log(funcionario2.calcularSalarioComImposto());
}

start();