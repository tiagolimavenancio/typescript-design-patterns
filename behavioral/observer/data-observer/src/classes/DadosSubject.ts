import DadosObserver from "../abstract/DadosObserver";
import Dados from "../models/Dados";

export default class DadosSubject {
    protected observers: DadosObserver[];
    protected dados: Dados;

    constructor() {
        this.observers = new Array();
    }

    public attach(observer: DadosObserver) {
        this.observers.push(observer);
    }

    public detach(indice: number) {
        this.observers.splice(indice, 1);
    }

    public setState(dados: Dados) {
        this.dados = dados;
        this.notifyObservers();
    }

    public getState(): Dados {
        return this.dados;
    }

    private notifyObservers() {
        for(let observer of this.observers) {
            observer.update();
        }
    }
}