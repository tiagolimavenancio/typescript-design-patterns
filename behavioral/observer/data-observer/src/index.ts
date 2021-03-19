import DadosSubject from "./classes/DadosSubject";
import TabelaObserver from "./classes/TabelaObserver";
import BarraObserver from "./classes/BarraObserver";
import PorcentoObserver from "./classes/PorcentoObserver";
import Dados from "./models/Dados";

function start() {
    const dados: DadosSubject = new DadosSubject();
    dados.attach(new TabelaObserver(dados));
    dados.attach(new BarraObserver(dados));
    dados.attach(new PorcentoObserver(dados));

    dados.setState(new Dados(7, 3, 1));
    dados.setState(new Dados(2, 3, 1));
}

start();