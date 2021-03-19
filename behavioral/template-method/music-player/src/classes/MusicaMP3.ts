export default class MusicaMP3 {
    nome: string;
    autor: string;
    ano: string;
    estrelas: number;

    constructor(nome: string, autor: string, ano: string, estrelas: number) {
        this.nome = nome;
        this.autor = autor;
        this.ano = ano;
        this.estrelas = estrelas;
    }
}