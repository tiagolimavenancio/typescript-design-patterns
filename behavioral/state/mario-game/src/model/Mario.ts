import MarioState from "../interface/MarioState";
import MarioPequeno from '../classes/MarioPequeno';

export default class Mario {
    protected estado: MarioState;

    constructor() {
        this.estado = new MarioPequeno();
    }

    public pegarCogumelo(): void {
        this.estado = this.estado.pegarCogumelo();
    }

    public pegarFlor(): void {
        this.estado = this.estado.pegarFlor();
    }

    public pegarPena(): void {
        this.estado = this.estado.pegarPena();
    }

    public levarDano(): void {
        this.estado = this.estado.levarDano();
    }
}