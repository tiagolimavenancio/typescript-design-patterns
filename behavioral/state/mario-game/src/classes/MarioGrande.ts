import MarioState from "../interface/MarioState";
import MarioFogo from './MarioFogo';
import MarioCapa from './MarioCapa';
import MarioPequeno from './MarioPequeno';

export default class MarioGrande implements MarioState {

	pegarCogumelo(): MarioState {
		console.log("Mario ganhou 1000 pontos");
		return this;
	}

	pegarFlor(): MarioState {
		console.log("Mario com fogo");
		return new MarioFogo();
	}

	pegarPena(): MarioState {
		console.log("Mario com capa");
		return new MarioCapa();
	}

	levarDano(): MarioState {
		console.log("Mario pequeno");
		return new MarioPequeno();
	}

}