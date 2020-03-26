import OrdenadorTemplate from '../abstract/OrdenadorTemplate';
import MusicaMP3 from './MusicaMP3';

export default class OrdenadorPorEstrela extends OrdenadorTemplate {
    public isPrimeiro(musica1: MusicaMP3, musica2: MusicaMP3): boolean {
        if(musica1.estrelas > musica2.estrelas) {
            return true;
        }

        return false;
    }
}