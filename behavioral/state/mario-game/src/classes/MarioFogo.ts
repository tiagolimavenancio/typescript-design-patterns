import MarioState from "../interface/MarioState";
import MarioGrande from './MarioGrande';
import MarioCapa from './MarioCapa';

export default class MarioFogo implements MarioState {

	pegarCogumelo(): MarioState {
		console.log("Mario ganhou 1000 pontos");
		return this;
	}

	pegarFlor(): MarioState {
		console.log("Mario ganhou 1000 pontos");
		return this;
	}

	pegarPena(): MarioState {
		console.log("Mario com capa");
		return new MarioCapa();
	}

	levarDano(): MarioState {
		console.log("Mario grande");
		return new MarioGrande();
	}

}