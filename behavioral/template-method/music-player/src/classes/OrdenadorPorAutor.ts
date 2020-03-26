import OrdenadorTemplate from '../abstract/OrdenadorTemplate';
import MusicaMP3 from './MusicaMP3';

export default class OrdenadorPorAutor extends OrdenadorTemplate {
    public isPrimeiro(musica1: MusicaMP3, musica2: MusicaMP3): boolean {
        if(musica1.autor.localeCompare(musica2.autor) <= 0 ) {                    
            return true; 
        }
        
        return false;       
    }
}