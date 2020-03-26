import OrdenadorTemplate from '../abstract/OrdenadorTemplate';
import MusicaMP3 from './MusicaMP3';

export default class OrdenadorPorNome extends OrdenadorTemplate {

    public isPrimeiro(musica1: MusicaMP3, musica2: MusicaMP3): boolean {
        if(musica1.nome.localeCompare(musica2.nome) > 0) {                    
            return true; 
        }

        return false;
    }
}