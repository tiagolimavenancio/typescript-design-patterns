import DadosSubject from "../classes/DadosSubject";

export default abstract class DadosObserver {
    protected dados: DadosSubject;

    constructor(dados: DadosSubject) {
        this.dados = dados;
    }

    public abstract update(): void;
}