import OrdenadorTemplate from '../abstract/OrdenadorTemplate';
import MusicaMP3 from './MusicaMP3';

export default class OrdenadorPorAno extends OrdenadorTemplate {
    public isPrimeiro(musica1: MusicaMP3, musica2: MusicaMP3): boolean {
        if(musica1.ano.localeCompare(musica2.ano) < 0 ) {                    
            return true; 
        }
        
        return false; 
    }
}