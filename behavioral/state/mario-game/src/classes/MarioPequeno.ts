import MarioState from "../interface/MarioState";
import MarioGrande from './MarioGrande';
import MarioFogo from './MarioFogo';
import MarioCapa from './MarioCapa';
import MarioMorto from './MarioMorto';

export default class MarioPequeno implements MarioState {
    pegarCogumelo(): MarioState {
        console.log('Mario Grande');
        return new MarioGrande();
    }
    pegarFlor(): MarioState {
        console.log('Mario Grande com Fogo');
        return new MarioFogo();
    }
    pegarPena(): MarioState {
        console.log('Mario Grande Capa');
        return new MarioCapa();
    }
    levarDano(): MarioState {
        console.log('Mario Morto');
        return new MarioMorto();
    }
    
}