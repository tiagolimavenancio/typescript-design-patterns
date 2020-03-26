import MusicaMP3 from "../classes/MusicaMP3";

export default abstract class OrdenadorTemplate {
    
    protected abstract isPrimeiro(musica1: MusicaMP3, musica2: MusicaMP3): boolean;

    public ordenarMusica(lista: Array<MusicaMP3>): Array<MusicaMP3> {
        let novaLista: Array<MusicaMP3> = new Array();

        for (let musicaMP3 of lista) {
            novaLista.push(musicaMP3);
        }   

        for (let i = 0; i < novaLista.length; i++) {
            for (let j = i; j < novaLista.length; j++) {
                if(this.isPrimeiro(novaLista[i], novaLista[j])){
                    let temp: MusicaMP3 = novaLista[j];
                    novaLista[j] = novaLista[i];
                    novaLista[i] = temp;
                }
            }
        }

        return novaLista;
    }
}