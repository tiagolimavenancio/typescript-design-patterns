import MarioState from "../interface/MarioState";
import MarioGrande from './MarioGrande';
import MarioFogo from './MarioFogo';

export default class MarioCapa implements MarioState {
	
	pegarCogumelo(): MarioState {
		console.log("Mario ganhou 1000 pontos");
		return this;
	}

	pegarFlor(): MarioState {
		console.log("Mario com fogo");
		return new MarioFogo();
	}
	
	pegarPena(): MarioState {
		console.log("Mario ganhou 1000 pontos");
		return this;
	}
	
	levarDano(): MarioState {
		console.log("Mario grande");
		return new MarioGrande();
	}

}