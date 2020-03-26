import OrdenadorTemplate from '../abstract/OrdenadorTemplate';
import MusicaMP3 from '../classes/MusicaMP3';
import ModoDeReproducao from '../constants/ModoDeReproducao';
import OrdenadorPorAno from './OrdenadorPorAno';
import OrdenadorPorAutor from './OrdenadorPorAutor';
import OrdenadorPorNome from './OrdenadorPorNome';
import OrdenadorPorEstrela from './OrdenadorPorEstrela';

export default class PlayList {
    private musicas: Array<MusicaMP3>;
    private ordenador: OrdenadorTemplate;

    constructor(modo: ModoDeReproducao) {
        this.musicas = new Array<MusicaMP3>();
        switch (modo) {
            case ModoDeReproducao.porAno:
                this.ordenador = new OrdenadorPorAno();
                break;
            case ModoDeReproducao.porAutor:
                this.ordenador = new OrdenadorPorAutor();
                break;

            case ModoDeReproducao.porEstrela: 
                this.ordenador = new OrdenadorPorEstrela();
                break;

            case ModoDeReproducao.porNome:
                this.ordenador = new OrdenadorPorNome();
                break;

            default:
                break;
        }
    }

    public setModoDeReproducao(modo: ModoDeReproducao): void {
        this.ordenador = null;
        switch (modo) {
            case ModoDeReproducao.porAno:
                this.ordenador = new OrdenadorPorAno();
                break;
            case ModoDeReproducao.porAutor:
                this.ordenador = new OrdenadorPorAutor();
                break;

            case ModoDeReproducao.porEstrela: 
                this.ordenador = new OrdenadorPorEstrela();
                break;

            case ModoDeReproducao.porNome:
                this.ordenador = new OrdenadorPorNome();
                break;

            default:
                break;
        }
    }

    public adicionarMusica(nome: string, autor: string, ano: string, estrelas: number): void {
        this.musicas.push(new MusicaMP3(nome, autor, ano, estrelas));
    }

    public mostrarListaDeReproducao(): void {
        let novaLista: Array<MusicaMP3> = new Array();
        novaLista = this.ordenador.ordenarMusica(this.musicas);

        for (let musica of novaLista) {
            console.log(`${musica.nome} - ${musica.autor} \nAno: ${musica.ano} \nEstrelas: ${musica.estrelas}`);
        }
    }
}